import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

import "./TaskCard.css";

import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, index }) => {
	return (
		<article className='task_card'>
			<p className='task_text'>{title}</p>

			<div className='task_card_botom_line'>
				<div className='task_card_tags'>
					{tags.map((tag, index) => (
						<Tag
							key={index}
							tagName={tag}
							selected
						/>
					))}
				</div>
				<div
					className='task_delete'
					onClick={() => handleDelete(index)}>
					<RiDeleteBin5Fill className='delete_icon' />
				</div>
			</div>
		</article>
	);
};

export default TaskCard;
