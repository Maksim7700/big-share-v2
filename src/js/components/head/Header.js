import '../../../css/head/header.css';
import '../../../css/fonts/fonts.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';

import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavagation from './MobileNavigation';

const Header = () => {

  return (
    <nav className='nav'>
      <DesktopNavigation />
      <MobileNavagation />
    </nav>
  );
};

export default React.memo(Header);
