import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
	const tagStyle = {
		React: { backgroundColor: "lime" },
		"C#": { backgroundColor: "dodgerblue" },
		JS: { backgroundColor: "deeppink" },
		MERN: { backgroundColor: "cyan" },
		Fullstack: { backgroundColor: "yellow" },
		Database: { backgroundColor: "fuchsia" },
		Frontend: { backgroundColor: "blueviolet" },
		Backend: { backgroundColor: "orange" },
		API: { backgroundColor: "orangered" },
		Udemy: { backgroundColor: "mediumorchid" },
		Youtube: { backgroundColor: "red" },
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
