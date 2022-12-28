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
      <img  id='company-11' alt='company icon' src='./client/company3_.svg'/>
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
        <img alt='add'/>
        <div className='add-my-company Gilroy-500'>Add my company</div>
      </div>
    </Scroll>
  </div>
  );
}

export default MobileClient;
