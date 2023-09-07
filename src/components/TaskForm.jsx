import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
	const [taskData, setTaskData] = useState({
		task: "",
		status: "todo",
		tags: [],
	});

	const [error, setError] = useState("");

	// *** CHECK TAG
	const checkTag = (tag) => {
		return taskData.tags.some((item) => item === tag);
	};

	// *** SELECT TAG
	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filteredTags = taskData.tags.filter((item) => item !== tag);

			setTaskData((prev) => {
				return { ...prev, tags: filteredTags };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] };
			});
		}
	};

	// *** HANDLE CHANGE
	const handleChange = (e) => {
		const { name, value } = e.target;

		setTaskData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	// *** HANDLE SUBMIT
	const handleSubmit = (e) => {
		e.preventDefault();

		//*** Check if task is empty
		if (taskData.task.trim() === "") {
			setError("Input field cannot be empty.");
			return;
		}

		//*** Clear the error message if the input is not empty
		setError("");

		setTasks((prev) => {
			return [...prev, taskData];
		});

		setTaskData({
			task: "",
			status: "todo",
			tags: [],
		});
	};

	return (
		<header className='app_header'>
			<form onSubmit={handleSubmit}>
				<div className='input_form'>
					<input
						type='text'
						name='task'
						value={taskData.task}
						className='task_input'
						placeholder='Enter your task'
						onChange={handleChange}
					/>

					<button
						type='submit'
						className='task_submit'>
						Add
					</button>
				</div>

				{error && <div className='error_message'>{error}</div>}

				<div className='task_form_bottom_line'>
					<div>
						<Tag
							tagName='Chore'
							selectTag={selectTag}
							selected={checkTag("Chore")}
						/>
						<Tag
							tagName='Study'
							selectTag={selectTag}
							selected={checkTag("Study")}
						/>
						<Tag
							tagName='Grocery'
							selectTag={selectTag}
							selected={checkTag("Grocery")}
						/>
						<Tag
							tagName='Work'
							selectTag={selectTag}
							selected={checkTag("Work")}
						/>
					</div>

					<div>
						<label
							htmlFor='status'
							className='status_label'>
							Status:{" "}
						</label>
						<select
							name='status'
							className='task_status'
							value={taskData.status}
							onChange={handleChange}>
							<option value='todo'>Todo</option>
							<option value='doing'>Doing</option>
							<option value='done'>Done</option>
						</select>
					</div>
				</div>
			</form>
		</header>
	);
};

export default TaskForm;
