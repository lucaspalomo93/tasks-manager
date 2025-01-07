import { ButtonProps } from '../interfaces';

const Button = ({ btn, text, type, handleButtonClick, isFull }: ButtonProps) => {
	return (
		<button
			type={type}
			onClick={handleButtonClick}
			className={`btn btn-${btn} rounded p-2 ${isFull ? 'w-1/4' : ''}`}
		>
			{text}
		</button>
	);
};

export default Button;
