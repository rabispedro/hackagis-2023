import "./../styles/checkable-card.css";
import { useState } from "react";

type CheckableCardProps = {
	id: number;
	image: string;
	name: string;
	slug: string;
}

export const CheckableCard: React.FC<CheckableCardProps> = ({ id, image, name, slug }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleClick = () => {
		setIsChecked((prev : boolean) => !prev);
		const card = document.querySelector(`#${slug}-${id}`);
		card?.animate([
			{
				'offset': 0,
				'easing': 'ease-in-out',
				'transform': 'scale(1)'
			},
			{
				'offset': 0.5,
				'easing': 'ease-in-out',
				'transform': 'scale(0.8)'
			},
			{
				'offset': 1,
				'easing': 'ease-in-out',
				'transform': 'scale(1)'

			}
		], 800);

	}

	return (
		<div className={`card-is-checked-${isChecked}`} id={slug + '-' + id.toString()} onClick={() => handleClick()} >
			<img src={image} alt={slug} />
			<h1>{name}</h1>
		</div>
	);
};