import { useEffect, useState } from 'react';
import { Header } from '../components/header';
import './../styles/new-account.css'
import { Link } from 'react-router-dom';
import { categories } from '../databases/categories';
import { ICategory } from '../types/category';
import { CheckableCard } from '../components/checkable-card';

export const NewAccount: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [addReliable, setAddReliable] = useState<boolean>(false);

	const db = categories;
	const [list, setList] = useState<ICategory[]>([]);

	useEffect(() => {
		setList(db);
	}, []);

	const handleNextStep = () => {
		setStep((prev) => {
			if(prev < 3)
				return prev+1;
			else 
				return 3;
		});
	}

	const handlePreviousStep = () => {
		setStep((prev) => {
			if(prev > 1)
				return prev-1;
			else
				return 1;
		});
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

								<button onClick={() => handlePreviousStep()}>Voltar</button>
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

								<button onClick={() => handlePreviousStep()}>Voltar</button>
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
										.map((category, key) => {
											return <CheckableCard id={category.id} image={category.image} name={category.name} slug={category.slug} key={key} />
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