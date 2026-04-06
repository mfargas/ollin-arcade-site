import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ollinarcade.fun";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
