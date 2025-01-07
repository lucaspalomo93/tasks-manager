import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TasksContext from '../context/TasksContext';
import Button from '../components/Button';
import { v4 } from 'uuid';

const TaskCreate = () => {
	const navigate = useNavigate();
	const { addTask } = useContext(TasksContext);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		addTask({
			id: v4(),
			title,
			description
		});
		navigate('/');
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='container border-solid border-2 border-blue-200 flex flex-col justify-center items-start gap-3 w-1/3 p-4 mt-5'
		>
			<label htmlFor='title' className='form-label'>
				Title
			</label>
			<input
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				type='text'
				className='form-control'
			/>
			<label htmlFor='title' className='form-label'>
				Description
			</label>
			<input
				onChange={(e) => setDescription(e.target.value)}
				value={description}
				type='text'
				className='form-control'
			/>
			<div className='flex justify-center items-center space-x-4 w-full'>
				<Button btn='primary' text='Create' type='submit' />
				<Button
					btn='secondary'
					text='Go Back'
					type='button'
					handleButtonClick={() => navigate('/')}
				/>
			</div>
		</form>
	);
};

export default TaskCreate;
