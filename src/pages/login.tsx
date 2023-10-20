import HeadsetIcon from "./../assets/headset.png";
import FacebookIcon from "./../assets/facebook.png";
import LogoIcon from "./../assets/react.svg";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/login.css";

export const Login: React.FC = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/home');
	}
	
	return (
		<div className="login">
			<header className="login-header">
				<img src={LogoIcon} alt="" />
				<h1>Praça</h1>
			</header>

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
				</section>

				<p>OU</p>

				<section className="login-facebook">
					<Link to={'/home'}>
						<img src={FacebookIcon} alt="Icone do Facebook" />
						<p>Entrar com Facebook</p>
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
					<img src={HeadsetIcon} alt="Icone de microfone" />
					<p>Preciso de ajuda</p>
				</Link>
			</footer>
		</div>
	);
}