import "./PageNotFound.css";
import pageNotFoundSrc from "../../../Assets/images/pageNotFound.jpg"
import { NavLink } from "react-router-dom";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<h2>Sorry!</h2>
			<h2>The page you are looking for doesn't exist</h2>
            <a href="javascript:history.back()">Back to Last Page</a>
            <div>
            <img src={pageNotFoundSrc} alt=""/>
            </div>
        </div>
    );
}

export default PageNotFound;
