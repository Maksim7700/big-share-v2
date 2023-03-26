import '../../../css/anketa/select.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Select = (props) => {

  useEffect(() => {
    AOS.init();
})
  const image = props.image;
  const title = props.title;
  const clicks = () => props.myClick(title);
  return (
    <div data-aos='fade-up' onClick={clicks} className={`select select-${props.num}`}>
      {image}
      <div className='select-title Gilroy-500'>{title}</div>
    </div>
  )
}

export default Select;
