import { useParams } from "react-router-dom";
import { InlineHeader } from "../components/inline-header";

export const Room: React.FC = () => {
	const { slug } = useParams();
	const name = slug?.split('-').join(' ');

	return (
		<div className="room">
			<InlineHeader />

			SALA: {name}
		</div>
	);
}