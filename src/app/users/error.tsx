'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function UserLoadingError({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button className="btn" type="button" onClick={reset}>
				Try again
			</button>
		</div>
	);
}
