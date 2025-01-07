import { createContext, ReactNode, useEffect, useState } from 'react';
import { TaskType } from '../interfaces';

interface State {
	tasks: TaskType[];
	deleteTask: (id: string) => void;
	addTask: (task: TaskType) => void;
	updateTask: (task: TaskType) => void;
}

const InitialState: State = {
	tasks: [],
	deleteTask: () => {},
	addTask: () => {},
	updateTask: () => {}
};

const TasksContext = createContext<State>(InitialState);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<TaskType[]>(() => {
		const tasksFromStorage = localStorage.getItem('tasks');
		return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
	});

	useEffect(() => {
		// Intentar cargar las tareas del localStorage
		const tasksFromStorage = localStorage.getItem('tasks');
		if (tasksFromStorage) {
			const parsedTasks = JSON.parse(tasksFromStorage);
			if (Array.isArray(parsedTasks)) {
				setTasks(parsedTasks);
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const deleteTask = (id: string) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};

	const addTask = (task: TaskType) => {
		setTasks([...tasks, task]);
	};

	const updateTask = (updatedTask: TaskType) => {
		const updatedTasks = tasks.map((task) =>
			task.id === updatedTask.id ? { ...task, ...updatedTask } : task
		);
		setTasks(updatedTasks);
	};
	return (
		<TasksContext.Provider value={{ tasks, deleteTask, addTask, updateTask }}>
			{children}
		</TasksContext.Provider>
	);
};
export default TasksContext;
