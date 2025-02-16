'use client';

import { useSession } from 'next-auth/react';

import { SignIn } from '../auth-components/sign-in';
import { SignOut } from '../auth-components/sign-out';

export function UserStatus() {
	const { data: session, status } = useSession();

	console.log(session, status);

	return status === 'authenticated' ? <SignOut avatarUrl={session.user?.image} /> : <SignIn />;
}
