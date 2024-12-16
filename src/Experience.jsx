import "./Experience.css";
import Position from "./Position";

const Experience = () => {
    const positions = [
        {
            title: "Undergraduate Researcher",
            subtitle: "UW Sensor Systems Lab",
            description: "Currently working on research in the UW Sensor Systems Lab under Jared Nakahara on acoustic levitation.",
            technologies: ["SystemVerilog", "FPGAs"]
        },
        {
            title: "Software Engineering Intern",
            subtitle: "WEX, Inc.",
            description: "Worked on an internal chatbot tool to streamline the meeting scheduling process.",
            technologies: ["Google Cloud Platform", "Google Chat API", "Python", "Flask"]
        }
    ];

    return (
        <div className="Experience">
            {positions.map((position, index) => (
                <Position key={index} {...position} />
            ))}
        </div>
    );
};

export default Experience;