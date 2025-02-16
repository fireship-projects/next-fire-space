type Props = {
	email: string;
	name: string;
	avatarUrl: string;
};

export function UserCard(props: Props) {
	return (
		<div className="stat border rounded-sm">
			<div className="stat-figure text-secondary">
				<div className="avatar online">
					<div className="w-16 rounded-full">
						<img src={props.avatarUrl} alt="avatar of a person" />
					</div>
				</div>
			</div>
			<div className="stat-title">{props.name}</div>
			<div className="stat-desc text-secondary">{props.email}</div>
		</div>
	);
}
