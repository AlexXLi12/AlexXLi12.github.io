import "./Position.css";

const Position = ({ title, subtitle, description, technologies }) => {
    return (
        <div className="position shadow-effect">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Position;