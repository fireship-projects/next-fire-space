import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		cssChunking: true,
		reactCompiler: true,
		useLightningcss: true,
		webVitalsAttribution: ['CLS', 'LCP'],
	},
};

export default nextConfig;
