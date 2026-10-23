import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_URL_PRODUCTION || 'https://www.adamstd.my.id'; // Fallback URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/dashboard", 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
