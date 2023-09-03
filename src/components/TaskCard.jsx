import React from "react";

import "./TaskCard.css";

import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = () => {
	return (
		<article className='task_card'>
			<p className='task_text'>This is a Sample Text</p>

			<div className='task_card_botom_line'>
				<div className='task_card_tags'>
					<Tag tagName='HTML' />
					<Tag tagName='CSS' />
				</div>
				<div className='task_delete'>
					<img
						src={deleteIcon}
						className='delete_icon'
						alt=''
					/>
				</div>
			</div>
		</article>
	);
};

export default TaskCard;
