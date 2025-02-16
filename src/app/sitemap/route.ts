import { format } from "date-fns";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Ini biar tidak dianggap statis

const SITE_URL = "https://haloezra.xyz";

const pages = ["/", "/about", "/portofolio", "/contact"];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
          <url>
            <loc>${SITE_URL}${page}</loc>
            <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
