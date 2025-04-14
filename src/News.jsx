import Event from "./Event";

const News = () => {
	const events = [
		{
			date: "January 31, 2025",
			description: "Accepted an offer as a Software Engineer Intern at Chewy for Summer 2025!"
		},
		{
			date: "December 2024",
			description: "Started a new position as a Research Assistant at the UW Sensor Systems Lab working on FPGA data transmission.",
		},
	];

	return (
		<section className="section" id="news">
			<h1 className="title is-1">News</h1>
			{events.map((event, index) => (
				<Event key={index} {...event} />
			))}
		</section>
	);
};

export default News;
