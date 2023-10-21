import "./../styles/header.css";
import LogoIcon from "./../assets/logo.png";

export const Header: React.FC = () => {
	return (
		<header className="header">
				<img src={LogoIcon} alt="" />
				<h1>Praça</h1>
			</header>
	);
} 