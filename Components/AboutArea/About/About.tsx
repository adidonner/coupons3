import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
            <h2>-------</h2>
			<h2>This website is a development practice </h2>
			<h2>guided by Bakshi Eldar </h2>
			<h2>made by Adi Donner in his studies at  </h2>
			<h2>John Bryce &copy; course 153 </h2>
            <img src="https://www.johnbryce.co.il/src/jbh_small.jpg"
            alt="JB"
            height={70}
            />
        </div>
    );
}

export default About;
