import { TaskType } from '../interfaces';
import Task from '../components/Task';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

interface TasksListProps {
	tasks: TaskType[];
}

const TasksList = ({ tasks }: TasksListProps) => {
	console.log('tasks...', tasks);
	const navigate = useNavigate();
	return (
		<>
			<div className='flex flex-col mt-5'>
				{tasks.length > 0 ? (
					<div className='flex flex-col justify-center items-center gap-8 mt-10'>
						{tasks.map((task) => (
							<Task
								key={task.id}
								id={task.id}
								description={task.description}
								title={task.title}
							/>
						))}
					</div>
				) : (
					<div className='container text-center'>No Tasks Created</div>
				)}
				<div className='mt-3 w-full flex justify-center'>
					<Button
						isFull={true}
						btn='success'
						text='Create New Task'
						type='button'
						handleButtonClick={() => navigate('/create')}
					/>
				</div>
			</div>
		</>
	);
};

export default TasksList;
