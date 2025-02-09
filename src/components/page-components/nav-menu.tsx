import Image from 'next/image';
import Link from 'next/link';

import SignIn from '@/components/auth-components/sign-in';

const menuItems = [
	{ label: 'About', path: '/about' },
	{ label: 'Blog', path: '/blog' },
	{ label: 'Users', path: '/users' },
];

export default function NavMenu() {
	return (
		<nav className="flex items-center justify-between p-4">
			<Link href="/">
				<Image src="/globe.svg" width={30} height={30} alt="NextSpace Logo" />
			</Link>
			<ul className="flex list-none margin-block-end-2">
				{menuItems.map((item) => (
					<li key={item.label} className="flex p-2 margin-inline-end-2">
						<Link href={item.path}>{item.label}</Link>
					</li>
				))}
			</ul>
			<SignIn />
		</nav>
	);
}
