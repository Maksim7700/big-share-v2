import { Link } from 'react-router-dom';
import '../../../css/hover.css'

const NavLinks = ({mobile, setClick}) => {
    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/about-us', label: 'About us' },
        { to: '/blogs', label: 'Blog' }
      ];

    return (
        <>
        <div className='navlinks'>
            {navLinks.map((link, index) => (
                <div key={index} className='hover-header'>
                    <Link onClick={() => setClick(false)} to={link.to}>{link.label}</Link>
                </div>
            ))}
            {mobile && <div className='contact-us-mobile-button-container'><button className='contact-us-mobile-button'>Contact Us</button></div>}
        </div>
        </>
    )
}

export default NavLinks;