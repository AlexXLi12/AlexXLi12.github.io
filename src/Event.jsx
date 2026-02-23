const Event = ({ description, date }) => {
	return (
		<div className="timeline-item" data-animate>
			<div className="timeline-date">{date}</div>
			<div className="timeline-text">{description}</div>
		</div>
	);
};

export default Event;
