const Event = ({ description, date }) => {
	return (
		<div className="news-item">
			<p>
				<span className="news-date">{date}:</span> {description}
			</p>
		</div>
	);
};

export default Event;
