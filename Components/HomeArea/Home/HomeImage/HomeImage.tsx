import "./HomeImage.css";
import homeImageSrc from "../../../../Assets/images/homeImage.png";

function HomeImage(): JSX.Element {
    return (
        <div className="homeImage">
			<img src={homeImageSrc} alt=""/>
        </div>
    );
}

export default HomeImage;
