import { useParams } from "react-router-dom";
import { InlineHeader } from "../components/inline-header";
import './../styles/room.css';
import { useEffect, useState } from "react";
import { IRoom } from "../types/room";
import { rooms } from "../databases/rooms";
import { Frame } from "../components/frame";

export const Room: React.FC = () => {
	const db = rooms.map(rooms => rooms.list).flatMap(room => room);
	const [list, setList] = useState<IRoom[]>([]);
	const [room, setRoom] = useState<IRoom>({description: "", id: 0, image: "", name: "", online: false, slug: "", watchers: 0})
	
	const { slug } = useParams();

	useEffect(() => {
		setList(db);
	}, [slug]);

	useEffect(() => {
		setRoom(list.filter(room => room.slug === slug)[0]);
	}, [list, slug]);

	console.log("Room: ", room);

	return (
		<div className="room">
			<InlineHeader />

			<div className="room-content">

				<Frame  id={room?.id} description={room?.description} image={room?.image} name={room?.name} slug={room?.slug} key={slug} />
			</div>

		</div>
	);
}