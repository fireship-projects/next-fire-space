import { prisma } from '@/modules/db/prisma';
import { assert } from '@sindresorhus/is';
import type { Metadata } from 'next';

interface Props {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
	const user = await prisma.user.findUniqueOrThrow({ where: { id: params.id } });

	const { name, email, image, bio } = user;

	assert.string(name);
	assert.string(email);
	assert.string(image);

	return (
		<div className="card card-xl border bg-base-100 w-96 m-4">
			<figure className="px-10 pt-10">
				<img src={image} alt="Users Profile" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
				<h3>{email}</h3>
				<p className="card-body	">{bio}</p>
				{/* <div className="card-actions">
					<button className="btn btn-primary">Buy Now</button>
				</div> */}
			</div>
		</div>
	);
}
