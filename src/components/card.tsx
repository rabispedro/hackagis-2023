import "./../styles/card.css";

type CardProps = {
	id: number;
	image: string;
	name: string;
	slug: string;
	description: string;
	isOnline: boolean;
	watchers: number;
}

export const Card: React.FC<CardProps> = ({ id, image, name, slug, isOnline }: CardProps) => {
	return (
		<div className={`card-is-online-${isOnline}`} id={id.toString()}  >
			<img src={image} alt={slug} />
			<h1>{name}</h1>
		</div>
	);
};