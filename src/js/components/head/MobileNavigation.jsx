import { useState } from "react";
import Container from "../../UI/Containter";
import NavLinks from "./NavLinks";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import {scroller} from 'react-scroll';
import { scroll } from "../../utils/helper";

export const MobileNavigation = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const headerClass = (location.pathname.startsWith('/portfolio') || location.pathname.startsWith('/about-us')) 
  ? 'img-white' 
  : 'img-black';

    const [click, setClick] = useState(false);

    const Hamburger = (
        <MdOutlineMenu
            className="HamburgerMenu"
            size="30px"
            color="#4ACB8F"
            onClick={() => setClick(!click)}
        />
    );

    const Close = (
        <MdClose
            className="HamburgerMenu"
            size="30px"
            color="#4ACB8F"
            onClick={() => setClick(!click)}
        />
    );

    return (
        <Container className="navigator mobile-nav">
            <img className={headerClass} alt="Logo" />
            {click ? Close : Hamburger}
            {/* Передаємо `click` в `NavLinks` */}
            <NavLinks mobile={true} setClick={setClick} isActive={click} />
            <button onClick={() => scroll(location, navigation, scroller)} className="contact-us-button">Contact Us</button>
        </Container>
    );
};

export default MobileNavigation;
