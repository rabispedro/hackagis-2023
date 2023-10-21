import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { InlineHeader } from "../components/inline-header";
import { rooms } from "../databases/rooms";
import { IRoom } from "../types/room";
import "./../styles/home.css";

export const Home: React.FC = () => {
	const db = rooms.map(rooms => rooms.list).flatMap(room => room);
	const [list, setList] = useState<IRoom[]>([]);
	const [listPopular, setListPopular] = useState<IRoom[]>([]);
	const [listTop, setListTop] = useState<IRoom[]>([]);

	useEffect(() => {
		setList(db);
	}, []);

	useEffect(() => {
		setListTop(list.filter(room => room.watchers >= 200 && room.online));
		setListPopular(list.filter(room => room.watchers >= 20 && room.online));
	},[list]);

	console.log(list);

	return (
		<main className="home">
			<InlineHeader />

			<div className="home-content">
				<section>
					<h1>Destaques</h1>

					{
						listTop
						.map((room, key) => {
							return <Card description={room.description} id={room.id} image={room.image} name={room.name} isOnline={room.online} slug={room.slug} watchers={room.watchers} key={key} />
						})
					};

				</section>

				<section>
					<h1>Populares</h1>
					{
						listPopular
						.map((room, key) => {
							return <Card description={room.description} id={room.id} image={room.image} name={room.name} isOnline={room.online} slug={room.slug} watchers={room.watchers} key={key} />
						})
					}
				</section>
			</div>

		</main>
	);
}
