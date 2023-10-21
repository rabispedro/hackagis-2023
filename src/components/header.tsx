import "./../styles/header.css";
import LogoIcon from "./../assets/react.svg";

export const Header: React.FC = () => {
	return (
		<header className="header">
				<img src={LogoIcon} alt="" />
				<h1>Praça</h1>
			</header>
	);
} 