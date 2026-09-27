import { notFound } from "next/navigation";

/** Any unknown path inside a locale renders that locale's 404 page (with site header and footer). */
export default function Missing() {
  notFound();
}
