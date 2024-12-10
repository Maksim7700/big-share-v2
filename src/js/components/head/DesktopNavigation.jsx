import Container from "../../UI/Containter"
import NavLinks from "./NavLinks"

const DesktopNavigation = () => {
    return (
        <Container className='navigator desktop-nav'>
            <img />
            <NavLinks mobile={false}/>
            <button className='contact-us-button'>Contact Us</button>
        </Container>
    )
}

export default DesktopNavigation