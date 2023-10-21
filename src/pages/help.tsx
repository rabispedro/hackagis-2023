import { useEffect, useState } from 'react';
import { faq } from '../databases/faq';
import './../styles/help.css';
import { IFaq } from '../types/faq';
import { FaqMessage } from '../components/faq-message';
import { Link } from 'react-router-dom';

export const Help: React.FC = () => {
	const [messages, setMessages] = useState<IFaq[]>([]);

	useEffect(() => {
		setMessages(faq);
	} , [faq]);
	
	return (
		<div className="help">
			<div className="help-header">
				<h1>Podemos te ajudar?</h1>
				<p>Aqui na Central de Ajuda você encontrará respostas para as dúvidas mais frequentes.</p>
			</div>

			<div className='help-content'>
				{
					messages
						.map((message) => <FaqMessage question={message.question} answer={message.answer} />)
				}
			</div>

			<Link to={'/'}>Voltar</Link>

		</div>
	);
}