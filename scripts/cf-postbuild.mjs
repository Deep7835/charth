// Runs after `next build`. On Cloudflare Workers Builds (WORKERS_CI=1) it bundles the
// already-built app for Workers with OpenNext and copies the prerendered pages into the
// static assets (the read-only incremental cache), so the dashboard's default
// "npm run build" + "npx wrangler deploy" settings work. Locally it does nothing.
import { spawnSync } from "node:child_process";
import { cpSync, existsSync } from "node:fs";

if (process.env.WORKERS_CI === "1" || process.env.OPENNEXT_BUILD === "1") {
  const result = spawnSync("npx", ["opennextjs-cloudflare", "build", "--skipNextBuild"], { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status ?? 1);
  // Same step `opennextjs-cloudflare deploy` performs for the static-assets cache.
  if (existsSync(".open-next/cache")) {
    cpSync(".open-next/cache", ".open-next/assets/cdn-cgi/_next_cache", { recursive: true });
    console.log("Copied prerendered pages into .open-next/assets/cdn-cgi/_next_cache");
  }
}
