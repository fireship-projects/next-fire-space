import { prisma } from '@/modules/db/prisma';
import Link from 'next/link';

export default async function Users() {
	const users = await prisma.user.findMany();

	return (
		<div className="stats stats-horizontal p-4">
			{users.map((user) => (
				<div key={user.id} className="stat border rounded-sm">
					<div className="stat-figure text-secondary">
						{user.image ? (
							<div className="avatar online">
								<div className="w-16 rounded-full">
									<img src={user.image} alt="avatar of a person" />
								</div>
							</div>
						) : null}
					</div>
					<Link className="link link-hover" href={`/users/${user.id}`}>
						{user.name}
					</Link>
					<div className="stat-desc text-secondary">{user.email}</div>
				</div>
			))}
		</div>
	);
}
