import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

function App() {
	return (
		<div className='app'>
			<TaskForm />
			<main className='app_main'>
				<TaskColumn
					title='To Do'
					icon={todoIcon}
				/>
				<TaskColumn
					title='Doing'
					icon={doingIcon}
				/>
				<TaskColumn
					title='Done'
					icon={doneIcon}
				/>
			</main>
		</div>
	);
}

export default App;
