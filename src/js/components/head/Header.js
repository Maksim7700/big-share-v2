import '../../../css/head/header.css';
import '../../../css/fonts/fonts.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';

import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavagation from './MobileNavigation';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const headerClass = (location.pathname.startsWith('/portfolio') || location.pathname.startsWith('/about-us')) 
  ? 'header-white' 
  : 'header-black';

  return (
    <nav className={`nav ${headerClass}`}>
      <DesktopNavigation />
      <MobileNavagation />
    </nav>
  );
};

export default React.memo(Header);
