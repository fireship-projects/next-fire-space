import { signOut } from 'next-auth/react';

export function SignOut() {
	return (
		<button onClick={() => signOut()} className="btn btn-secondary" type="submit">
			Sign Out
		</button>
	);
}
