import Container from "../../UI/Containter";
import Block from "./Block";
import '../../../css/portfolio/portfolio.css';
import Add from './Add';
const Portfolio = () => {
    return (
        <Container>
            <div className="flex-container-portfolio em-02">
                <div className="portfolio-title Gilroy-700">See Some of Our Popular <span>Portfolio</span></div>
                <div className="portfolio-text-container">
                    <div className="portfolio-text Montserrat-400">Our team helped global brands design, build, launch, and scale their digital products! We bring digital transformation across multiple industries (from social, finTech and healthTech to IoT and Transportation)</div>
                </div>
                <div className="portfolio-blocks">
                    <div className="flex-container-block">
                        <Block logo='1' title='1' className='portfolio1'/>
                        <Block logo='2' title='2' className='portfolio2 margin-left-16'/>
                    </div>
                    <div className="flex-container-block">
                        <Block logo='3' title='3' className='portfolio3'/>
                        <Block logo='4' title='4' className='portfolio4 margin-left-16'/>
                    </div>
                    <div className="flex-container-block">
                        <Block logo='5' title='5' className='portfolio5'/>
                        <Add className='margin-left-16'/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Portfolio;
