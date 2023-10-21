import { Link, useNavigate } from "react-router-dom";
import "./../styles/login.css";
import { Header } from "../components/header";

export const Login: React.FC = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/home');
	}
	
	return (
		<div className="login">
			<Header />

			<section className="login-section">
				<h2>Entrar no Aplicativo</h2>

				<section className="login-field">
					<div className="login-input">
						<label htmlFor="">Usuário:</label>
						<input type="text" placeholder="(34) 9 1234-5678" />
					</div>

					<div className="login-input">
						<label htmlFor="">Senha:</label>
						<input type="password" placeholder="***********" />
					</div>

					<button onClick={() => handleLogin()}>Entrar</button>
					<Link to={'/forgot'}>Esqueci minha senha</Link>
				</section>

				<p>OU</p>

				<section className="login-facebook">
					<Link to={'/home'}>
						<p>Facebook</p>
					</Link>

					<Link to={'/home'}>
						<p>Google</p>
					</Link>
				</section>

				<section className="login-create-account">
					<Link to={'/new'}>
						<p>Criar nova conta</p>
					</Link>
				</section>
			</section>

			<footer className="login-footer">
				<Link to={'/help'}>
					<p>Preciso de ajuda</p>
				</Link>
			</footer>
		</div>
	);
}