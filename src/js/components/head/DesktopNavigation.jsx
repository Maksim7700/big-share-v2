import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../UI/Containter";
import NavLinks from "./NavLinks";
import { scroller } from "react-scroll";
import { scroll } from "../../utils/helper";

const DesktopNavigation = () => {
    const location = useLocation();
    const navigation = useNavigate();

    const headerClass = (location.pathname.startsWith('/portfolio') || location.pathname.startsWith('/about-us')) 
        ? 'img-white' 
        : 'img-black';



    return (
        <Container className="navigator desktop-nav">
            <a href="/"><img className={headerClass} alt="Logo" /></a>
            <NavLinks mobile={false} />
            <button onClick={() => scroll(location, navigation, scroller)} className="contact-us-button">
                Contact Us
            </button>
        </Container>
    );
};

export default DesktopNavigation;
