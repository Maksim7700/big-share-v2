import { useState } from 'react';
import '../../../css/anketa/select.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';

const Select = (props) => {
  const image = props.image;
  const title = props.title;

  const [img, setImg] = useState(props.image);

  const changeImage = () => {
    setImg('complex-service-hover.svg');
  }

  const changeImage1 = () => {
    setImg(props.image);
  }

  return (
    <div onMouseOver={changeImage} onMouseOut={changeImage1} onClick={props.myClick} className={`select select-${props.num}`}>
      <img alt={`${image}`} src={`/anketa/${img}`}/>
      <div className='select-title Gilroy-500'>{title}</div>
    </div>
  )
}

export default Select;
