import Image from 'next/image';

import SignIn from '@/components/auth-components/sign-in/sign-in';
import Link from 'next/link';
import styles from './nav-menu.module.css';

export default function NavMenu() {
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<Image src="/globe.svg" width={30} height={30} alt="NextSpace Logo" />
			</Link>
			<ul className={styles.links}>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/users">Users</Link>
				</li>
			</ul>
			<SignIn />
		</nav>
	);
}
