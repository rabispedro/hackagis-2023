import { Link } from 'react-router-dom';
import './../styles/forgot.css';
import { Header } from '../components/header';

export const Forgot: React.FC = () => {
	return (
		<div className="forgot">
			<Header />

			<section className="forgot-section">
				<h2>Esqueci minha senha</h2>

				<section className="forgot-field">
					<div className="forgot-input">
						<label htmlFor="">Usuário:</label>
						<input type="text" placeholder="(34) 9 1234-5678" />
					</div>
				</section>

				<section className="forgot-button">
					<Link to={'/'}>
						<p>Enviar</p>
					</Link>
				</section>

			</section>
		</div>
	);
}