import Event from "./Event";

const News = () => {
	const events = [
		{
			date: "April 27 2025",
			description: (
				<>
					Won HackTech 2025 <strong>Best use of AI </strong> and{" "}
					<strong>Best Finance/Data Analytics Project </strong> awards for our
					project Renaissance Research! View the Devpost submission{" "}
					<a href="https://devpost.com/software/renaissance-research?_gl=1*1i2txri*_gcl_au*MTU1ODI0MzQ5My4xNzQ1OTEwMjMw*_ga*MTA5NDUzOTk2OS4xNzQ1OTEwMjMw*_ga_0YHJK3Y10M*MTc0NTkxMzM3My4yLjAuMTc0NTkxMzM3My4wLjAuMA.."
					target="_blank" rel="noopener noreferrer">
						here
					</a>{" "} and our live website{" "}
					<a href="https://renresearch.co"
					target="_blank" rel="noopener noreferrer">here</a>!
				</>
			),
		},
		{
			date: "January 31, 2025",
			description:
				"Accepted an offer as a Software Engineer Intern at Chewy for Summer 2025!",
		},
		{
			date: "December 2024",
			description:
				"Started a new position as a Research Assistant at the UW Sensor Systems Lab working on FPGA data transmission.",
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
