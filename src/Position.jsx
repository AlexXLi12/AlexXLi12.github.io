const Position = ({ title, subtitle, description, technologies }) => {
    return (
        <div className="card box">
            <h1 className="title is-4">{title}</h1>
            <h3 classname="subtitle is-5">{subtitle}</h3>
            <div className="card-content">
                <p className="content">{description}</p>
                <p className="content">Technologies used: {technologies.join(", ")}</p>
            </div>
        </div>
    );
};

export default Position;