import { Hamburguer } from "./hamburguer";
import PurchaseIcon from "./../assets/carrinho-de-compras.png";
import MagnifyIcon from "./../assets/lupa.png";
import { Header } from "./header";

import "./../styles/inline-header.css";
import { Link } from "react-router-dom";

export const InlineHeader: React.FC = () => {
	return (
		<div className="inline-header">
			<Hamburguer />

			<Header />

			<section className="inline-header-icons">
				<Link to={'/market'}>
					<img src={PurchaseIcon} alt="" />
				</Link>
				<img src={MagnifyIcon} alt="" />
			</section>
		</div>
	);
}