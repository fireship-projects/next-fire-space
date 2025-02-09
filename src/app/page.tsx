import { auth } from '@/modules/auth/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
	const session = await auth();

	if (!session) {
		redirect('/api/auth/signin');
	}

	return <h1>Welcome to the home</h1>;
}
