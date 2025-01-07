import { useContext } from 'react';
import './App.css';
import TasksContext from './context/TasksContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TasksList from './pages/TasksList';
import TasklUpdate from './pages/TasklUpdate';
import TaskCreate from './pages/TaskCreate';

function App() {
	const { tasks } = useContext(TasksContext);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<TasksList tasks={tasks} />} />
				<Route path='update/:id' element={<TasklUpdate />} />
				<Route path='create' element={<TaskCreate />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
