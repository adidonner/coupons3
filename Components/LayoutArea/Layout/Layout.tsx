import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Home from "../../HomeArea/Home/Home";
import HomeImage from "../../HomeArea/Home/HomeImage/HomeImage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <AuthMenu />
            <Menu />
            <Header />
            <Routing />  
            <Footer/>
        </div>
    );
}

export default Layout;
