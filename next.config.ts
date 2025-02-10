import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		cssChunking: true,
		webVitalsAttribution: ['CLS', 'LCP'],
	},
};

export default nextConfig;
