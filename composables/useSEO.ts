// composables/useSEO.ts
export const useSEO = (seoData: {
    title?: string
    description?: string
    image?: string
    url?: string
    type?: string
  }) => {
    const { public: config } = useRuntimeConfig()
    
    const title = seoData.title 
      ? `${seoData.title} - ${config.siteName}` 
      : config.siteName
      
    const description = seoData.description || config.siteDescription
    const image = seoData.image || `${config.siteUrl}/og-image.jpg`
    const url = seoData.url || config.siteUrl
    
    useHead({
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: seoData.type || 'website' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:image', name: 'twitter:image', content: image }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: url }
      ]
    })
  }