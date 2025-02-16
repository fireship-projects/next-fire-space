import { UserCard } from '@/components/user-components/user-card';
import { prisma } from '@/modules/db/prisma';

export default async function Users() {
	const users = await prisma.user.findMany();

	return (
		<div className="stats stats-horizontal p-4">
			{users.map((user) => (
				<UserCard
					key={user.id}
					email={user.email ?? ''}
					name={user.name ?? ''}
					avatarUrl={user.image ?? ''}
				/>
			))}
		</div>
	);
}
