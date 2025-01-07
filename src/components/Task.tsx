import { TaskType } from '../interfaces';
import Button from './Button';
import { useContext } from 'react';
import TasksContext from '../context/TasksContext';
import { useNavigate } from 'react-router-dom';

const Task = ({ id, title, description }: TaskType) => {
	const { deleteTask } = useContext(TasksContext);
	const navigate = useNavigate();

	return (
		<div
			className='border-solid border-2 border-black flex flex-col justify-center items-center gap-3 w-[30rem]'
			// style={{ width: '30rem' }}
		>
			<div className='border-b-2 w-full'>
				<h3 className='w-full text-center'>{title}</h3>
			</div>
			<div className='w-full'>
				<p className=' border-b w-full text-center'>{description}</p>
			</div>
			<div className='mb-2 flex justify-center gap-2 items-center'>
				<Button
					btn='danger'
					text='Delete'
					type='button'
					handleButtonClick={() => deleteTask(id!)}
				/>
				<Button
					btn='warning'
					text='Update'
					type='button'
					handleButtonClick={() => navigate(`/update/${id}`)}
				/>
			</div>
		</div>
	);
};

export default Task;
