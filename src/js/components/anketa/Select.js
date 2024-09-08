import '../../../css/anketa/select.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';


import { useEffect } from 'react';

const Select = (props) => {

  useEffect(() => {
    
})
  const image = props.image;
  const title = props.title;
  const clicks = () => props.myClick(title);
  return (
    <div  onClick={clicks} className={`select select-${props.num}`}>
      {image}
      <div className='select-title Gilroy-500'>{title}</div>
    </div>
  )
}

export default Select;
