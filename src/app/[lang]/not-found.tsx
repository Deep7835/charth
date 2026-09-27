import type { Metadata } from "next";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

export const metadata: Metadata = { title: "404", robots: { index: false } };

export default function NotFound() {
  return <NotFoundContent />;
}
