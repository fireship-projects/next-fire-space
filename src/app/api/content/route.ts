const posts = [
	{
		title: 'Getting Started with Next.js',
		slug: 'getting-started-with-nextjs',
		content: 'Quick intro to Next.js and how to create your first app.',
	},
	{
		title: 'Mastering TypeScript Basics',
		slug: 'mastering-typescript-basics',
		content: 'An overview of types, interfaces, and best practices.',
	},
	{
		title: 'Building a REST API',
		slug: 'building-a-rest-api',
		content: 'How to design endpoints and handle requests in a Node app.',
	},
	{
		title: 'Understanding React Hooks',
		slug: 'understanding-react-hooks',
		content: 'Hooks explained with real-world use cases and examples.',
	},
	{
		title: 'Deploying to Vercel',
		slug: 'deploying-to-vercel',
		content: 'Step-by-step guide for deploying your Next.js project.',
	},
	{
		title: 'Intro to Firebase Authentication',
		slug: 'intro-to-firebase-auth',
		content: 'Set up user sign-in, sign-up, and secure routes quickly.',
	},
	{
		title: 'Styling with Tailwind CSS',
		slug: 'styling-with-tailwind-css',
		content: 'Utility classes that simplify styling your web components.',
	},
	{
		title: 'Serverless Functions 101',
		slug: 'serverless-functions-101',
		content: 'Using serverless environments for scalable backend logic.',
	},
	{
		title: 'Optimizing Images in Next.js',
		slug: 'optimizing-images-in-nextjs',
		content: 'Leverage Next.js features to serve responsive, optimized images.',
	},
	{
		title: 'Static Site Generation Demo',
		slug: 'static-site-generation-demo',
		content: 'Learn how Next.js pre-renders pages for better performance.',
	},
];

import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json(posts);
}
