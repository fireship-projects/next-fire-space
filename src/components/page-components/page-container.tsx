export default function PageContainer({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="p-4">{children}</main>;
}
