import { d as defineEventHandler, s as setHeader } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const sitemap_xml = defineEventHandler(async (event) => {
  const hostname = "https://wappiad.com";
  const staticRoutes = [
    "/",
    "/home",
    "/servicios",
    "/chatbotconinteligenciaartificial",
    "/contacto"
    // Agrega rutas traducidas si tienes i18n, por ejemplo:
    // "/en/home",
    // "/pt/home",
  ];
  const dynamicRoutes = [];
  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes.map(
    (route) => `<url>
        <loc>${hostname}${route}</loc>
        <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>${route === "/" ? "1.0" : "0.8"}</priority>
      </url>`
  ).join("\n")}
    </urlset>`;
  setHeader(event, "content-type", "application/xml");
  return sitemap;
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
