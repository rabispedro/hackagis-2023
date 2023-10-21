import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();

	const handleClick = () => {
		if(isOnline)
			navigate(`/room/${slug}`);
	}
	
	return (
		<div className={`card-is-online-${isOnline}`} id={id.toString()} onClick={() => handleClick()} >
			<img src={image} alt={slug} />
			<h1>{name}</h1>
		</div>
	);
};