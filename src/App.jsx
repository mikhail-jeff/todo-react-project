import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([]);

	// *** HANDLE DELETE
	const handleDelete = (taskIndex) => {
		const newTasks = tasks.filter((task, index) => index !== taskIndex);
		setTasks(newTasks);
	};

	return (
		<div className='app'>
			<TaskForm setTasks={setTasks} />
			<main className='app_main'>
				<TaskColumn
					title='To Do'
					icon={todoIcon}
					tasks={tasks}
					status='todo'
					handleDelete={handleDelete}
				/>
				<TaskColumn
					title='Doing'
					icon={doingIcon}
					tasks={tasks}
					status='doing'
					handleDelete={handleDelete}
				/>
				<TaskColumn
					title='Done'
					icon={doneIcon}
					tasks={tasks}
					status='done'
					handleDelete={handleDelete}
				/>
			</main>
		</div>
	);
}

export default App;
