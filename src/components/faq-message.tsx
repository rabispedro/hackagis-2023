import "./../styles/faq-message.css"

type FaqMessageProps = {
	question: string;
	answer: string;
}

export const FaqMessage: React.FC<FaqMessageProps> = ({ question, answer }) => {
	return (
		<div className="faq-message">
			<h1>{question}</h1>
			<p>{answer}</p>
		</div>
	);
}