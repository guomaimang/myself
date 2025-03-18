/** @type {import('next').NextConfig} */
import PWABuilder from 'next-pwa';

const withPWA = PWABuilder({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /\.(css|js)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-assets',
      },
    },
    {
      urlPattern: /\.(png|jpg|jpeg|svg|gif|webp)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
      },
    },
    {
      urlPattern: /\.(woff|woff2|eot|ttf|otf)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'fonts',
      },
    },
  ],
});

const nextConfig = withPWA({
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    path: "/myself/_next/image",
  },
  trailingSlash: false,
  basePath: '/myself',
  // 确保生成指定文件名的HTML
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/cn': { page: '/cn' },
    };
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
