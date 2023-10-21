import { useNavigate } from "react-router-dom";
import "./../styles/frame.css";

type FrameProps = {
	id: number;
	image: string;
	name: string;
	slug: string;
	description: string;
}

export const Frame: React.FC<FrameProps> = ({ id, image, name, slug, description, }) => {
	const navigate = useNavigate();
	
	const handleHelp = () => {
		navigate('/help');
	}
	
	return (
		<div className="frame" id={id?.toString()}>
			<section className="frame-stream">
				<img src={image} alt={slug} />

				<span className="frame-description">
					<h1>{name}</h1>
					<h2>{description}</h2>
				</span>

				<button onClick={() => handleHelp()}>Ajuda</button>
			</section>

			<section className="frame-messages"></section>

			<section className="frame-input">

			</section>
		</div>
	);
}