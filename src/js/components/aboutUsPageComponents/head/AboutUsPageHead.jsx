import Container from "../../../UI/Containter";
import Feedback from "./feedback/Feedback";
import './aboutUsPageHead.scss';

const AboutUsPageHead = () => {
    return (
        <Container className="about-us-page-head-container">
            <div className="about-us-page-head">
                <h1 className="about-us-page-head-title"><span>Discover</span> Our Brand</h1>
                <div className="about-us-page-head-description">
                    Big Share is a forward-thinking IT company committed to delivering cutting-edge digital solutions. Our brand represents innovation, reliability, and excellence in every project we undertake. With a team of passionate professionals, we aim to create lasting partnerships with our clients, helping them thrive in a rapidly evolving digital landscape. We believe in making a positive impact through technology, and our work reflects our dedication to delivering top-quality results
                </div>
                <div className="feedback-container">
                    <Feedback img='./feedback/upwork.svg' title={'Up Work'} rate={'5.0'}/>
                    <Feedback img='./feedback/clutch.svg' title={'Clutch'} rate={'5.0'}/>
                </div>
            </div>
            <img className="about-us-page-head-logo" src='./about-us-page/logo-about-us-page-head.svg' alt="Logo" loading="lazy" />
        </Container>
    )
}

export default AboutUsPageHead;