const Event = ({description, date }) => {
	return (
		<div className="block">
			<p className="content">{date}: {description}</p>
		</div>
	);
};

export default Event;
