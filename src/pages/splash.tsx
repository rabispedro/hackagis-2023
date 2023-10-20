import HackaGIS from "./../assets/react.svg";
import "../styles/splash.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Splash: React.FC = ()  => {
	const delayTimeout = 2000;
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/login');
		}, delayTimeout);

	}, [navigate]);

	return (
		<div className="splash">
			<h1>Praça</h1>
			<img src={HackaGIS} alt="Logo do Hacka GIS 2023" />
		</div>
	);
}