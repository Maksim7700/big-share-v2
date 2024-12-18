import '../../../css/portfolio/add.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import {Link as Scroll} from 'react-scroll';


import { useEffect } from 'react';

const Add = (props) => {
  useEffect(() => {
    
})
  return (
    <Scroll to='anketa' spy={true} smooth={true}>
      <div  className={`portfolio-add-block ${props.className}`}>
        <div className='inside-add'>
          <div className='add-text Montserrat-500'>Add my project</div>
          <div className='add-star-image'><div className='add-star-left'><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.0399 13.893L44.7998 21.413C45.3065 22.453 46.6665 23.4396 47.8132 23.653L54.6132 24.773C58.9599 25.493 59.9732 28.6397 56.8532 31.7863L51.5465 37.093C50.6665 37.973 50.1599 39.7063 50.4532 40.9597L51.9732 47.5197C53.1732 52.693 50.3999 54.7197 45.8399 51.9997L39.4665 48.213C38.3198 47.5197 36.3999 47.5197 35.2532 48.213L28.8798 51.9997C24.3198 54.693 21.5465 52.693 22.7465 47.5197L24.2666 40.9597C24.5599 39.733 24.0532 37.9997 23.1732 37.093L17.8666 31.7863C14.7466 28.6663 15.7599 25.5196 20.1066 24.773L26.9065 23.653C28.0532 23.4663 29.4132 22.453 29.9199 21.413L33.6799 13.893C35.6799 9.81301 38.9866 9.81301 41.0399 13.893Z" stroke="#338DDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3334 13.333H5.33337" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3334 50.667H5.33337" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.00004 32H5.33337" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          </div>
        </div>
      </div>
    </Scroll>
  )
}

export default Add;
