import { signIn } from '@/modules/auth/auth';

export default function SignIn() {
	return (
		<form
			action={async () => {
				'use server';
				await signIn('github', { redirectTo: '/' });
			}}
		>
			<button className="btn btn-primary" type="submit">
				Signin with GitHub
			</button>
		</form>
	);
}
