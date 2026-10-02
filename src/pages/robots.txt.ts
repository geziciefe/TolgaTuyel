import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseURL = site ?? new URL('https://tolgatuyel.com');
  const sitemapURL = new URL('/sitemap.xml', baseURL).href;

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
