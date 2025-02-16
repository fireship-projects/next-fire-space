import { signOut } from 'next-auth/react';

function SmallAvatar({ src }: { src: string }) {
	return (
		<div className="avatar">
			<div className="w-8 rounded-full">
				<img src={src} alt="Tailwind-CSS-Avatar-component" />
			</div>
		</div>
	);
}

interface Props {
	avatarUrl?: string | null;
}

export function SignOut({ avatarUrl }: Props) {
	return (
		<button onClick={() => signOut()} className="btn btn-secondary" type="submit">
			{avatarUrl ? <SmallAvatar src={avatarUrl} /> : null}
			Sign Out
		</button>
	);
}
