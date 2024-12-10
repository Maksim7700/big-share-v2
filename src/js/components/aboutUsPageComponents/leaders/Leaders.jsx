import Container from "../../../UI/Containter";
import Leader from "./leader/Leader";
import './leaders.scss';

const Leaders = () => {
    return (
        <div className="leaders">
            <Container>
                <div className="leaders-title">Meet the <span>leaders</span></div>
                <div className="leaders-info">
                    <div className="leaders-container">
                        <Leader src={'./leaders/andrii.jpg'} name="Andrii Kuziv" title={"Co-Founder, UX/UI Designer"}/>
                        <Leader src={'./leaders/maksym.jpg'} name="Maksym Kuziv" title={"Co-Founder, Software Engineer"}/>
                    </div>
                    <div className="leader-description">
                        <i>
                            We are unstoppable in our quest to become the world's best agency by providing top-notch services <br /><br />Get ready to be amazed by the quality and results of every project we deliver. We are 
                        </i>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Leaders;