import { MetadataRoute } from 'next';
import { config } from '@/lib/utils';
import { menuData } from '@/lib/menu';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: `${siteUrl}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: `${siteUrl}/terms`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
  ];

  const sectionLinks: MetadataRoute.Sitemap = config.navbarLinks.map((link) => ({
    url: `${siteUrl}/${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const menuCategoryLinks: MetadataRoute.Sitemap = menuData.map((category) => ({
    url: `${siteUrl}/#${category.name.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...sectionLinks, ...menuCategoryLinks];
}
