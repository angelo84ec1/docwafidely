// server/routes/robots.txt.ts
export default defineEventHandler((event) => {
    const hostname = getRequestHost(event)
    
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
  Crawl-delay: 1`
  
    setHeader(event, "content-type", "text/plain")
    return robots
  })