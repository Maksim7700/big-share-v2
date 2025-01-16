import Container from "../../../UI/Containter";
import Leader from "./leader/Leader";
import './leaders.scss';

const Leaders = () => {
    return (
        <div className="leaders">
            <Container>
                <div className="leaders-title">Meet our <span>Leadership</span></div>
                <div className="leaders-info">
                    <div className="leaders-container">
                        <Leader src={'./leaders/andrii.jpg'} name="Andrii Kuziv" title={"Co-Founder, UX/UI Designer"} link={'https://www.linkedin.com/in/andrii-kuziv-0478a8181/'}/>
                        <Leader src={'./leaders/maksym.jpg'} name="Maksym Kuziv" title={"Co-Founder, Software Engineer"} link={'https://www.linkedin.com/in/maksym-kuziv-463a59184/'}/>
                    </div>
                    <div className="leader-description">
                        <i>
                            With years of experience and a deep passion for technology, we steer our team to deliver high-quality digital solutions <br /><br />Vision and expertise are key to fostering growth for both our company and the businesses we serve, ensuring excellence in all our collaborations
                        </i>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Leaders;