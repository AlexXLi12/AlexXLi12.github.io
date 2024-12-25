import "./Experience.css";
import Position from "./Position";

const Experience = () => {
	const positions = [
		{
			title: "Undergraduate Researcher",
			subtitle: "UW Sensor Systems Lab",
			description:
				"Working on research in the UW Sensor Systems Lab under Jared Nakahara on acoustic levitation. Specifically, I am developing Verilog code to control signalling between hardware components.",
			technologies: ["SystemVerilog", "FPGAs"],
		},
		{
			title: "Software Engineering Intern",
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
			subtitle:
				"George Mason University - College of Engineering and Computing",
			description:
				"Implemented and conducted experiments on the novel Sharpness-Aware Minimization Optimizer to measure improvements over Stochastic Gradient Descent on the CIFAR-10 image classification dataset.",
			technologies: ["Python", "PyTorch"],
		},
	];

	return (
		<div className="experience" id="experience">
			<h1>Experience</h1>
			{positions.map((position, index) => (
				<Position key={index} {...position} />
			))}
		</div>
	);
};

export default Experience;
