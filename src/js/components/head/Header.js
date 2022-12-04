import Container from "../../UI/Containter"
import '../../../css/head/header.css';
import '../../../css/fonts/fonts.css';

const Header = () => {
    return (
        <Container>
            <div className='flex-container-header'>
                <div className="header-col-1"><div className="header-logo"></div></div>
                <div className="header-col-2 Montserrat-600">
                    <div className="flex-container-header-col-2">
                        <div>Home</div>
                        <div>Portfolio</div>
                        <div>We are hiring</div>
                        <div>Blog</div>
                    </div>
                </div>
                <div className="header-col-3"><button className="contact-us-button Montserrat-600">Contact Us</button></div>
            </div>
        </Container>
    )
}

export default Header;