import '../../../css/client/project.css';
import '../../../css/hover.css';

const Project = () => {
    return (
        <div className="projects flex-container-project em-02">
            <div className='flex-direction-column'>
                <img className='project' id='company-1' alt='company icon' src='./client/company1.svg'/>
                <div className='project-add project'>
                    <img alt='add project'/>
                    <div className='add-my-company Gilroy-500'>Add my company</div>
                </div>
                <img className='project' id='company-2' alt='company icon' src='./client/company2.svg'/>
            </div>
            <div className='flex-direction-column'>
                <img className='project' id='company-3' alt='company icon' src='./client/company3.svg'/>
                <img className='project' id='company-4' alt='company icon' src='./client/company4.svg'/>
                <img className='project' id='company-5' alt='company icon' src='./client/company5.svg'/>
                <img className='project' id='company-6' alt='company icon' src='./client/company6.svg'/>
            </div>
            <div className='flex-direction-column'>
                <img className='project' id='company-7' alt='company icon' src='./client/company7.svg'/>
                <img className='project' id='company-8' alt='company icon' src='./client/company8.svg'/>
                <img className='project' id='company-9' alt='company icon' src='./client/company9.svg'/>
                <img className='project' id='company-10' alt='company icon' src='./client/company10.svg'/>
                <img className='project' id='company-11' alt='company icon' src='./client/company11.svg'/>
            </div>
        </div>
    )
}

export default Project;
