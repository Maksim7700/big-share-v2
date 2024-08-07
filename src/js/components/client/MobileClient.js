import '../../../css/client/project.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import {Link as Scroll} from 'react-scroll';


const MobileClient = () => {
  return (
  <div className='flex-grid-direction'>
    <div className='project' >
      <img id='company-11' alt='company icon' src='./client/company1_.svg'/>
    </div>
    <div className='project' >
      <img id='company-11' alt='company icon' src='./client/company2_.svg'/>
    </div>
    <div className='project' >
      <img  id='company-11' alt='company icon' src='./client/company3_.png'/>
    </div>
    <div className='project' >
      <img id='company-11' alt='company icon' src='./client/company4_.svg'/>
    </div>
    <div className='project' >
      <img id='company-11' alt='company icon' src='./client/company5_.svg'/>
    </div>
    <div className='project'>
      <img id='company-11' alt='company icon' src='./client/company6_.svg'/>
    </div>
    <div className='project' >
      <img id='company-11' alt='company icon' src='./client/company8_.svg'/>
    </div>
    <div className='project' >
      <img  id='company-11' alt='company icon' src='./client/company9_.svg'/>
    </div >
    <div className='project' >
      <img id='company-11' alt='company icon' src='./client/company10_.svg'/>
    </div>
    <div className='project' >
      <img id='company-11' alt='company icon' src='./client/company11_.svg'/>
    </div>
    <div className='project' >
      <img id='company-11' alt='company icon' src='./client/company7_.svg'/>
    </div>
    <Scroll to='anketa' spy={true} smooth={true}>
      <div className='project project-add project'>
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.7799 10.42L33.5999 16.06C33.9799 16.84 34.9999 17.58 35.8599 17.74L40.9599 18.58C44.2199 19.12 44.9799 21.48 42.6399 23.84L38.6599 27.82C37.9999 28.48 37.6199 29.78 37.8399 30.72L38.9799 35.64C39.8799 39.52 37.7999 41.04 34.3799 39L29.5999 36.16C28.7399 35.64 27.2999 35.64 26.4399 36.16L21.6599 39C18.2399 41.02 16.1599 39.52 17.0599 35.64L18.1999 30.72C18.4199 29.8 18.0399 28.5 17.3799 27.82L13.3999 23.84C11.0599 21.5 11.8199 19.14 15.0799 18.58L20.1799 17.74C21.0399 17.6 22.0599 16.84 22.4399 16.06L25.2599 10.42C26.7599 7.36 29.2399 7.36 30.7799 10.42Z" stroke="#338DDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 10H4" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 38H4" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 24H4" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
        <div className='add-my-company Montserrat-500'>Add my company</div>
      </div>
    </Scroll>
  </div>
  );
}

export default MobileClient;
