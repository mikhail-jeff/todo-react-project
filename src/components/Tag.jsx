import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
	const tagStyle = {
		Chore: { backgroundColor: "lime" },
		Study: { backgroundColor: "dodgerblue" },
		Grocery: { backgroundColor: "cyan" },
		Work: { backgroundColor: "yellow" },
		Personal: { backgroundColor: "fuchsia" },
		Urgent: { backgroundColor: "red" },
		default: { backgroundColor: "#f9f9f9" },
	};
	return (
		<button
			type='button'
			className='tag'
			style={selected ? tagStyle[tagName] : tagStyle.default}
			onClick={() => selectTag(tagName)}>
			{tagName}
		</button>
	);
};

export default Tag;
