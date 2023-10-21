import { useParams } from "react-router-dom";
import { InlineHeader } from "../components/inline-header";
import { useEffect, useState } from "react";
import { rooms } from "../databases/rooms";
import { IRoomList } from "../types/room-list";
import { Card } from "../components/card";
import { IRoom } from "../types/room";
import "./../styles/category.css";

export const Category: React.FC = () => {
	const { category } = useParams();
	const db = rooms.filter(rooms => rooms.category === category)[0];
	const [list, setList] = useState<IRoomList>({ category: "", list: []});
	const [listCategory, setListCategory] = useState<IRoom[]>([]);
	
	useEffect(() => {
		setList(db);
	}, [category]);

	useEffect(() => {
		setListCategory(list.list);
	}, [list]);

	return (
		<div className="category">
			<InlineHeader />

			<div className="category-content">
				<section>
					<h1>{list.category}</h1>

					{
						listCategory
						.map((room, key) => {
							return <Card description={room.description} id={room.id} image={room.image} name={room.name} isOnline={room.online} slug={room.slug} watchers={room.watchers} key={key} />
						})
					};

				</section>
			</div>

		</div>
	);
}
