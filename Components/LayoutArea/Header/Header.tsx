import "./Header.css";
// import logoCashSrc from "../../../../Assets/images/logoCash.png
import logo2Src from "../../../Assets/images/logo2.png";
function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>
                The Cash Back Coupon Website
                {/* <img src={logo2Src} alt=""/> */}
            </h1>
        </div>
    );
}

export default Header;
