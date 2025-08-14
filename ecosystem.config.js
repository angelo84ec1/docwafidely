module.exports = {
  apps: [
    {
      name: "nuxt amc_app",
      script: './.output/server/index.mjs',
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      }
    }
  ]
}
