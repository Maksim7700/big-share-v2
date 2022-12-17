import Container from "../../UI/Containter";
import '../../../css/technology/technology.css';
import Language from "./languages/Language";
import '../../../css/laptop.css';

const Technology = () => {
    return (
        <div className='technologies'>
        <Container>
            <div className="flex-container-technology">
                <div className="Gilroy-700 technology-title">Creating digital innovations with the<br/> latest <span>technologies</span></div>
                <div className="Montserrat-400 technology-text">Our team consists of enthusiastic technologists who love bringing real world solutions to our clients’ problems. Our ideas stem from a deep understanding of our clients’ markets, solutions, and visions.</div>
                <div className="languages"><Language /></div>
            </div>
        </Container>
        </div>
    )
}

export default Technology;
