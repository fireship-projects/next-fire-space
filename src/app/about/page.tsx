import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About us',
	description: 'We are social media company',
};

export default async function AboutPage() {
	return (
		<>
			<h1>About</h1>
		</>
	);
}
