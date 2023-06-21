import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import "./Home.css";
import HomeImage from "./HomeImage/HomeImage";


function Home(): JSX.Element {
    return (
        <div className="Home">
			<h3>Hello and welcome to the wonderful coupon website</h3>
            <h3>Where you can get the best offers on the net</h3>
            <HomeImage/>
        </div>
    );
}

export default Home;
