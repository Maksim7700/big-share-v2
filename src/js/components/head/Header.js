import Container from "../../UI/Containter"
import '../../../css/head/header.css';
import '../../../css/fonts/fonts.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import {Link as Scroll} from 'react-scroll';

const Header = () => {
    return (
        <Container>
            <div className='flex-container-header'>
                <div className="header-col-1"><div className="header-logo"></div></div>
                <div className="header-col-2 Montserrat-600">
                    {/* <div className="flex-container-header-col-2">
                        <div className='hover-header'>Home</div>
                        <div className='hover-header'>Portfolio</div>
                        <div className='hover-header'>We are hiring</div>
                        <div className='hover-header'>Blog</div>
                    </div> */}
                </div>
                <Scroll to='anketa' spy={true} smooth={true}>
                    <div className="header-col-3">
                        <button className="contact-us-button Montserrat-500">Contact Us</button>
                    </div>
                </Scroll>
            </div>
        </Container>
    )
}

export default Header;
