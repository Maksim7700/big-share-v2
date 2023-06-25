import '../../../css/head/header.css';
import '../../../css/fonts/fonts.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';

import { useState, useEffect } from 'react';
import { Link as Scroll } from 'react-scroll';
import Container from "../../UI/Containter"
import { Link } from 'react-router-dom';

const Header = () => {
  const [changeHeadColor, setChangeHeadColor] = useState(false);

  const handleScroll = () => {
    setChangeHeadColor(window.scrollY > 25);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${changeHeadColor ? 'fixed-header' : ''} fixed`}>
      <Container>
        <div className="flex-container-header">
          <div className="header-col-1">
            <div className="header-logo"></div>
          </div>
          <div className="header-col-2 Montserrat-600">
            <div className='flex-container-header-col-2'>
              {/* <div className='hover-header'>Home</div> */}
              <div className='hover-header'><Link to={'/portfolio'}>Portfolio</Link></div>
              {/* <div className='hover-header'>We are hiring</div> */}
              {/* <div className='hover-header'>Blog</div> */}
            </div>
          </div>
          <Scroll to="anketa" spy={true} smooth={true}>
            <div className="header-col-3">
              <button className="contact-us-button Montserrat-500">
                Contact Us
              </button>
            </div>
          </Scroll>
        </div>
      </Container>
    </div>
  );
};

export default Header;
