import { signIn } from 'next-auth/react';

export function SignIn() {
	return (
		<button onClick={() => signIn()} className="btn btn-primary" type="submit">
			Signin with GitHub
		</button>
	);
}
