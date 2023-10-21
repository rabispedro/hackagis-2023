import { Hamburguer } from "./hamburguer";
import PurchaseIcon from "./../assets/carrinho-de-compras.png";
import MagnifyIcon from "./../assets/lupa.png";
import { Header } from "./header";

import "./../styles/inline-header.css";

export const InlineHeader: React.FC = () => {
	return (
		<div className="inline-header">
			<Hamburguer />

			<Header />

			<img src={PurchaseIcon} alt="" />

			<img src={MagnifyIcon} alt="" />
		</div>
	);
}