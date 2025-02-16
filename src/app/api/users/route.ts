import { prisma } from '@/modules/db/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	const users = await prisma.user.findMany();

	return NextResponse.json(users);
}
