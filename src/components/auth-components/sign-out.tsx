import { signOut } from '@/modules/auth/auth';

export function SignOut() {
	return (
		<form
			action={async () => {
				'use server';
				await signOut();
			}}
		>
			<button className="btn btn-secondary" type="submit">
				Sign Out
			</button>
		</form>
	);
}
