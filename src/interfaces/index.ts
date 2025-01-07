/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TaskType {
	id?: string;
	title: string;
	description: string;
}

export interface ButtonProps {
	isFull?: boolean;
	btn: string;
	text: string;
	type: 'button' | 'submit' | 'reset' | undefined;
	handleButtonClick?: any;
}
