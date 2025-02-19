import Position from "./Position";

const Experience = () => {
	const positions = [
		{
			title: "Undergraduate Researcher",
			icon_path: "./images/paul_g_allen_school.jpeg",
			subtitle: "UW Sensor Systems Lab",
			description:
				[
					"Working on research in the UW Sensor Systems Lab under Jared Nakahara on acoustic levitation.",
					" Specifically, I am developing Verilog code to control signalling between hardware components.",
					<br/>,
					" Currently, I'm working on transitioning the transmission protocol for communicating between the FPGAs from I2C to UART."
				],
			technologies: ["SystemVerilog", "FPGAs"],
		},
		{
			title: "Software Engineering Intern",
			icon_path: "./images/wexinc_logo.jpeg",
			subtitle: "WEX, Inc.",
			description:
				"Worked on an internal chatbot tool to streamline the meeting scheduling process using Calendar API, Chat API, and Google Cloud Platform.",
			technologies: [
				"Google Cloud Platform",
				"Google Chat API",
				"Python",
				"Flask",
			],
		},
		{
			title: "Research Intern",
			icon_path: "./images/gmu_logo.jpeg",
			subtitle:
				"George Mason University - College of Engineering and Computing",
			description:
				"Implemented and conducted experiments on the novel Sharpness-Aware Minimization Optimizer to measure improvements over Stochastic Gradient Descent on the CIFAR-10 image classification dataset.",
			technologies: ["Python", "PyTorch"],
		},
	];

	return (
		<section className="section" id="experience">
			<h1 className="title is-1">Experience</h1>
			{positions.map((position, index) => (
				<Position key={index} {...position} />
			))}
		</section>
	);
};

export default Experience;
