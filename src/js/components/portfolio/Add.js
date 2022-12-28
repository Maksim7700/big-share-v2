import '../../../css/portfolio/add.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import {Link as Scroll} from 'react-scroll';

const Add = (props) => {
  return (
    <Scroll to='anketa' spy={true} smooth={true}>
      <div className={`portfolio-add-block ${props.className}`}>
        <div className='inside-add'>
          <div className='add-text Montserrat-500'>Add my project</div>
          <div className='add-star-image'><img alt='add' src='./portfolio/add-star.svg'/></div>
        </div>
      </div>
    </Scroll>
  )
}

export default Add;
