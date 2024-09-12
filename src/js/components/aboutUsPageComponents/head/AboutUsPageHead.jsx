import Container from "../../../UI/Containter";
import Feedback from "./feedback/Feedback";
import './aboutUsPageHead.scss';

const AboutUsPageHead = () => {
    return (
        <Container className="about-us-page-head-container">
            <div className="about-us-page-head">
                <div className="about-us-page-head-title"><span>Meet</span> our brand</div>
                <div className="about-us-page-head-description">
                    Innowise Group can cover the entire software development process, from product vision discussion to applications design and software enhancement. Our multi-skilled experienced team facilitates businesses worldwide on their way to digital transformation and helps companies take full advantage of IT innovations.
                </div>
                <div className="feedback-container">
                    <Feedback img='./feedback/upwork.svg' title={'Up Work'} rate={'5.0'}/>
                    <Feedback img='./feedback/clutch.svg' title={'Clutch'} rate={'5.0'}/>
                </div>
            </div>
            <img src='./about-us-page/logo-about-us-page-head.svg' alt="Logo" loading="lazy" />
        </Container>
    )
}

export default AboutUsPageHead;