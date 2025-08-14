import { d as defineEventHandler, g as getRequestHost, s as setHeader } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const robots_txt = defineEventHandler((event) => {
  getRequestHost(event);
  const robots = `User-agent: *
  Allow: /
  
  # Disallow admin and private areas
  Disallow: /admin/
  Disallow: /private/
  Disallow: /_nuxt/
  Disallow: /api/
  
  # Allow important files
  Allow: /api/sitemap
  Allow: /*.css$
  Allow: /*.js$
  
  # Sitemap
Sitemap: https://wappiad.com/sitemap.xml

  
  # Crawl delay (optional)
  Crawl-delay: 1`;
  setHeader(event, "content-type", "text/plain");
  return robots;
});

export { robots_txt as default };
//# sourceMappingURL=robots.txt.mjs.map
