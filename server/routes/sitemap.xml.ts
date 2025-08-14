export default defineEventHandler(async (event) => {
    const hostname = "https://wappiad.com";
  
    // Rutas estáticas (agrega aquí todas las que quieras indexar)
    const staticRoutes = [
      "/",
      "/home",
      "/servicios",
      "/chatbotconinteligenciaartificial",
      "/contacto",
      // Agrega rutas traducidas si tienes i18n, por ejemplo:
      // "/en/home",
      // "/pt/home",
    ];
  
    // No hay rutas dinámicas por ahora
    const dynamicRoutes = [];
  
    const allRoutes = [...staticRoutes, ...dynamicRoutes];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map(
          (route) => `<url>
        <loc>${hostname}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>${route === "/" ? "1.0" : "0.8"}</priority>
      </url>`
        )
        .join("\n")}
    </urlset>`;
  
    setHeader(event, "content-type", "application/xml");
    return sitemap;
  });
  
  