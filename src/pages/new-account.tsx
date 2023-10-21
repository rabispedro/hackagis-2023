import { useEffect, useState } from 'react';
import { Header } from '../components/header';
import './../styles/new-account.css'
import { Link } from 'react-router-dom';
import { rooms } from '../databases/rooms';
import { IRoom } from '../types/room';
import { Card } from '../components/card';

export const NewAccount: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [addReliable, setAddReliable] = useState<boolean>(false);

	const db = rooms.map(rooms => rooms.list).flatMap(room => room).filter(room => room.online);
	const [list, setList] = useState<IRoom[]>([]);

	useEffect(() => {
		setList(db);
	}, []);

	const handleNextStep = () => {
		setStep((prev) => prev+1);
	}

	const handleAddReliable = () => {
		setAddReliable(prev => !prev);
	}

	return (
		<div className="new-account">
			<Header />

			<section className="new-account-section">
				<h2>Novo Cadastro</h2>

				<section className="new-account-field">
					{
						(step === 1 ? (
							<section className='new-account-step-one'>
								<div className="new-account-input">
									<label htmlFor="">Nome:</label>
									<input type="text" placeholder="Aristeu" />
								</div>

								<div className="new-account-input">
									<label htmlFor="">Senha:</label>
									<input type="password" placeholder="***********" />
								</div>

								<div className="new-account-input">
									<label htmlFor="">Número:</label>
									<input type="text" placeholder="(34) 9 1234-5678" />
								</div>

								<button onClick={() => handleNextStep()}>Continuar</button>
							</section>
						): (<></>))
					}

					{
						(step === 2 ? (
							<section className='new-account-step-two'>
								<h3>Deseja incluir alguém de confiança?</h3>
								<div className="new-account-input">
									<label htmlFor="">Incluir: </label>
									<input type="checkbox" checked={addReliable} onChange={() => handleAddReliable()} />
								</div>

								<div className="new-account-input">
									<label htmlFor="">Número:</label>
									<input type="text" placeholder="(34) 9 1234-5678" />
								</div>

								<button onClick={() => handleNextStep()}>Continuar</button>
							</section>
						): (<></>))
					}

					{
						(step === 3 ? (
							<section className='new-account-step-three'>
								<h3>Quais seus interesses?</h3>
								
								<div className='new-account-interest'>
									{
										list
										.map((room, key) => {
											return <Card description={room.description} id={room.id} image={room.image} name={room.name} isOnline={room.online} slug={room.slug} watchers={room.watchers} key={key} />
										})
									}
								</div>
								
								<Link to={'/home'}>
									<p>Concluir</p>
								</Link>
							</section>
						) : (<></>))
					}

				</section>
			</section>

		</div>
	);
}