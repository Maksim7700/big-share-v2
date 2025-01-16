import Container from "../../UI/Containter";
import Block from "./Block";
import '../../../css/portfolio/portfolio.css';
import Add from './Add';
import '../../../css/laptop.css';

const Portfolio = () => {

    return (
        <Container>
            <div className="flex-container-portfolio em-02" >
                <h2 className="portfolio-title Gilroy-700">Explore some of our top <span>portfolio</span> projects</h2>
                <div className="portfolio-text-container">
                    <div className="portfolio-text Montserrat-400">Our team has helped global brands design, build, launch, and scale their digital products! We drive digital transformation across various industries, including social, fintech, healthtech, IoT, and transportation</div>
                </div>
                <div className="portfolio-blocks">
                        <a  target={"_blank"} href='https://www.behance.net/gallery/159125829/Crypto-launchpad-WolfPad' rel="noreferrer"><Block logo='1' title='1' text={'Crypto'} className='portfolio1'/></a>
                        <a  target={"_blank"} href='https://www.behance.net/gallery/159126571/AR-app-NewFace' rel="noreferrer"><Block logo='2' title='2' text={'AR, Sport'}className='portfolio2'/></a>
                        <a  target={"_blank"} href='https://www.behance.net/gallery/159127953/Web-app-VendorBay-' rel="noreferrer"><Block logo='3' title='3' text={'Healthcare'} className='portfolio3'/></a>
                        <a  target={"_blank"} href='https://www.behance.net/gallery/159240009/Acebuddy' rel="noreferrer"><Block logo='4' title='4' text={'NFT'}className='portfolio4'/></a>
                        <a  target={"_blank"} href='https://www.behance.net/gallery/159147753/Pedal-2-Earn' rel="noreferrer"><Block logo='5' title='5' text={'Web3'} className='portfolio5'/></a>
                        <Add />
                </div>
            </div>
        </Container>
    )
}

export default Portfolio;
