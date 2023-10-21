type CategoryProps = {
	slug: string;
}

export const Category: React.FC<CategoryProps> = ({ slug } : CategoryProps) => {
	return (
		<div className="category">
			<h1>{slug}</h1>
		</div>
	);
}
