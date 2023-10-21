import { useParams } from "react-router-dom";
import { InlineHeader } from "../components/inline-header";

export const Category: React.FC = () => {
	const { category } = useParams();
	
	return (
		<div className="category">
			<InlineHeader />
			<h1>{category}</h1>
		</div>
	);
}
