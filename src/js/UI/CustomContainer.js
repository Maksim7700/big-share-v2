import React from 'react';
import '../../css/ui.css';

const CustomContainer = (props) => {
  return (
    <div className={`custom-container ${props?.className}`}>{props.children}</div>
  )
}

export default CustomContainer;
