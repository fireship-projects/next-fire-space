import NavMenu from '../nav-menu/nav-menu';
import styles from './page-header.module.css';

export default function PageHeader() {
	return (
		<header className={styles.pageHeader}>
			<NavMenu />
		</header>
	);
}
