import styles from './page-container.module.css';

export default function PageContainer({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className={styles.pageContainer}>{children}</main>;
}
