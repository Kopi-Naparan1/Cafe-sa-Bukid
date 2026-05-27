import { absoluteUrl, routes } from "@/lib/seo";

export default function sitemap() {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : 0.8,
  }));
}
