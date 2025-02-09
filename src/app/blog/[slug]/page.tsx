interface Post {
	title: string;
	slug: string;
	content: string;
}

interface Props {
	params: {
		slug: string;
	};
}

export default async function BlogPostPage({ params }: Props) {
	const { slug } = await params;
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/content`);
	const posts: Post[] = await response.json();
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}

export async function generateStaticParams() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/content`);
	const posts: Post[] = await response.json();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export const revalidate = 420;
