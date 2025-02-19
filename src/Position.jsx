const Position = ({ title, icon_path, subtitle, description, technologies }) => {
	return (
		<div className="card">
			<div className="card-header">
				<img className="card-header-icon image is-128x128" src={icon_path} alt=""></img>
				<h1 className="card-header-title">{subtitle}</h1>
			</div>
			<div className="card-content">
				<h3 className="subtitle">{title}</h3>
				<p className="content">{description}</p>
				<p className="content">Technologies used: {technologies.join(", ")}</p>
			</div>
		</div>
	);
};

export default Position;
