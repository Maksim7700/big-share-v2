import Container from "../../UI/Containter";
import Block from "./Block";
import '../../../css/portfolio/portfolio.css';
import Add from './Add';
import '../../../css/laptop.css';

const Portfolio = () => {
    return (
        <Container>
            <div className="flex-container-portfolio em-02">
                <div className="portfolio-title Gilroy-700">See some of our popular <span>portfolio</span></div>
                <div className="portfolio-text-container">
                    <div className="portfolio-text Montserrat-400">Our team helped global brands design, build, launch, and scale their digital products! We bring digital transformation across multiple industries (from social, finTech and healthTech to IoT and Transportation)</div>
                </div>
                <div className="portfolio-blocks">
                    <div className="flex-container-block">
                        <Block logo='1' title='1' text={'Crypto'} className='portfolio1'/>
                        <Block logo='2' title='2' text={'AR, Sport'}className='portfolio2 margin-left-16'/>
                    </div>
                    <div className="flex-container-block">
                        <Block logo='3' title='3' text={'Healthca'} className='portfolio3'/>
                        <Block logo='4' title='4' text={'NFT'}className='portfolio4 margin-left-16'/>
                    </div>
                    <div className="flex-container-block">
                        <Block logo='5' title='5' text={'Web3'} className='portfolio5'/>
                        <Add className='margin-left-16'/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Portfolio;
