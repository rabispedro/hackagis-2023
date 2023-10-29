import ChocolateComPimentaTemplate from "./../assets/chocolate-com-pimenta.gif"
import MulheresDeAreiaTemplate from "./../assets/mulheres-de-areia.gif"
import AGrandeFamiliaTemplate from "./../assets/a-grande-familia.gif"
import AvenidaBrasilTemplate from "./../assets/avenida-brasil.gif"
import CalcinhaPretaTemplate from "./../assets/calcinha-preta.gif"
import FalamansaTemplate from "./../assets/falamansa.gif"
import BandaCalypsoTemplate from "./../assets/banda-calypso.gif"
import AvioesDoForroTemplate from "./../assets/avioes-do-forro.gif"
import { IRoomList } from "../types/room-list";

export const rooms: IRoomList[] = [
	{
		category: "novela",
		list: [
			{
				id: 1,
				image: ChocolateComPimentaTemplate,
				name: "Chocolate com Pimenta",
				slug: "chocolate-com-pimenta",
				description: "Bate-papo da novela da globo que passa no Vale a Pena Ver Denovo!",
				online: false,
				watchers: 100
			},
			{
				id: 2,
				image: AvenidaBrasilTemplate,
				name: "Avenida Brasil",
				slug: "avenida-brasil",
				description: "Bate-papo da novela da globo que passa no Vale a Pena Ver Denovo!",
				online: true,
				watchers: 1000
			},
			{
				id: 3,
				image: AGrandeFamiliaTemplate,
				name: "A Grande Familia",
				slug: "a-grande-familia",
				description: "Bate-papo da novela da globo que passa no Vale a Pena Ver Denovo!",
				online: true,
				watchers: 10
			},
			{
				id: 4,
				image: MulheresDeAreiaTemplate,
				name: "Mulheres de Areia",
				slug: "mulheres-de-areia",
				description: "Bate-papo da novela da globo que passa no Vale a Pena Ver Denovo!",
				online: false,
				watchers: 20
			}
		]
	},
	{
		category: "forro",
		"list": [
			{
				id: 5,
				image: CalcinhaPretaTemplate,
				name: "Calcinha Preta",
				slug: "calcinha-preta",
				description: "Banda de Forró que encantou a galera",
				online: false,
				watchers: 100
			},
			{
				id: 6,
				image: FalamansaTemplate,
				name: "Falamansa",
				slug: "falamansa",
				description: "Banda de Forró que encantou a galera",
				online: true,
				watchers: 100
			},
			{
				id: 7,
				image: BandaCalypsoTemplate,
				name: "Banda Calypso",
				slug: "banda-calypso",
				description: "Banda de Forró que encantou a galera",
				online: true,
				watchers: 100
			},
			{
				id: 8,
				image: AvioesDoForroTemplate,
				name: "Aviões do Forró",
				slug: "avioes-do-forro",
				description: "Banda de Forró que encantou a galera",
				online: true,
				watchers: 100
			}
		]
	},
]
