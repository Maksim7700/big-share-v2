import { useState } from "react";
import Container from "../../UI/Containter";
import NavLinks from "./NavLinks";
import {MdOutlineMenu} from 'react-icons/md'
import {MdClose} from 'react-icons/md';

export const MobileNavagation = () => {
    const [click, setClick] = useState(false);

    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
            size="30px" color="green" onClick={() => setClick(!click)}/>

    const Close = <MdClose className="HamburgerMenu"
             size="30px" color="green"
            onClick={() => setClick(!click)} />

    return (
        <Container className='navigator mobile-nav'>
            <img />
            { click ? Close : Hamburger} 
            {click && 
            <>  
                <NavLinks mobile={true} setClick={setClick}/>
            </>
            }
            <button className='contact-us-button'>Contact Us</button>
        </Container>
    )
}

export default MobileNavagation;