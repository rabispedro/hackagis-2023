import { rooms } from "../databases/rooms";
import LogoIcon from "./../assets/react.svg";
import "./../styles/home.css";

export const Home: React.FC = () => {
	const db = rooms;
	
	return (
		<main className="home">
			<header className="home-header">
				<img src={LogoIcon} alt="" />
				<h1>Praça</h1>
			</header>

			<section>
				<p>Atenção: usando este site, você concorda que tem, no mínimo, 18 anos aceita nossos <a href="">termos de uso</a>.</p>

				<select>
					<option value="geral">Geral</option>a
					<option value="religiao">Religião</option>
					<option value="forro">Forró</option>
					<option value="salao">Dança de Salão</option>
					<option value="cartas">Jogos de Cartas</option>
					<option value="">Jogos de </option>
					<option value="novela">Novela</option>
				</select>
			</section>

			<section>
				{
					db.map((room) => {
						return (
							<>
							<h1>Categoria: {room.category}</h1>
							</>
						)
					})
				}
			</section>

			<footer>
			</footer>
		</main>
	);
}
