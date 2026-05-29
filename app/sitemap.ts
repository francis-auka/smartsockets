import type { MetadataRoute } from 'next';
import { createClient } from '@/utils/supabase/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://smartsockets.co.ke';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/shop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  let productPages: MetadataRoute.Sitemap = [];
  try {
    const supabase = createClient();
    const { data: products } = await supabase
      .from('products')
      .select('id, createdat')
      .eq('category', 'sockets');

    if (products) {
      productPages = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date(product.createdat),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error('Error fetching products for sitemap:', error);
  }

  return [...staticPages, ...productPages];
}
