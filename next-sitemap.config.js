/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://votre-domaine.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/404'], // Pages à exclure du sitemap
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
} 