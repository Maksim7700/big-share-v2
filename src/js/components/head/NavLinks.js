import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../css/hover.css";
import { scroller } from "react-scroll";
import { scroll } from "../../utils/helper";

const NavLinks = ({ mobile, setClick, isActive }) => {
    const location = useLocation();
    const navigation = useNavigate();

    const headerClass = (location.pathname.startsWith('/portfolio') || location.pathname.startsWith('/about-us')) 
    ? 'header-white' 
    : 'header-black';

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about-us", label: "About us" },
        { to: "/portfolio-projects", label: "Portfolio" },
        { to: "/blogs", label: "Blog" },
    ];

    return (
        <div className={`${headerClass} navlinks ${isActive ? "active" : ""}`}>
            {navLinks.map((link, index) => (
                <div key={index} className="hover-header">
                    <Link className={headerClass} onClick={() => setClick(false)} to={link.to}>
                        {link.label}
                    </Link>
                </div>
            ))}
            {mobile && (
                <div className="contact-us-mobile-button-container">
                        <button
                            style={{marginBottom: 15}}
                            className="contact-us-mobile-button"
                            onClick={() => {
                                setClick(false);
                                scroll(location, navigation, scroller);
                            }}
                        >
                            Contact Us
                        </button>
                </div>
            )}
        </div>
    );
};

export default NavLinks;
