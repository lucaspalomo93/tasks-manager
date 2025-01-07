import { FormEvent, useContext, useState } from 'react';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import TasksContext from '../context/TasksContext';

const TasklUpdate = () => {
	const params = useParams();
	const navigate = useNavigate();
	const id = params.id;
	const { tasks, updateTask } = useContext(TasksContext);
	const task = tasks.find((task) => task.id === id);
	const [title, setTitle] = useState(task?.title || '');
	const [description, setDescription] = useState(task?.description || '');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		updateTask({
			id,
			title,
			description
		});
		navigate('/');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='container border-solid border-2 border-black flex flex-col justify-center items-start gap-3 w-1/3 p-4 mt-5'
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
				<Button btn='warning' text='Update' type='submit' />
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

export default TasklUpdate;
