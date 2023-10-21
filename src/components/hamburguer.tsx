import "./../styles/hamburguer.css";

export const Hamburguer: React.FC = () => {
	const handleHamburguer = () => {

	}
	
	return (
		<div className="hamburguer" onClick={() => handleHamburguer()}>
			<h1>Categorias</h1>
		</div>
	);
}