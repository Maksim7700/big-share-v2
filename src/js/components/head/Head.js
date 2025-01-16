
import '../../../css/head/head.css';
import '../../../css/all.css';
import Container from '../../UI/Containter';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import {Link as Scroll} from 'react-scroll';

const Head = () => {

    return (
        <Container>
            <div className='flex-head-container' >
                <div className="flex-containte-head em-02">
                    <h1 className="text-head-1 Gilroy-700">Let’s Build Software <span>{' '}Together</span></h1>
                    <div className="text-head-2 Montserrat-400">
                        <div>Big Share handles projects of any scale: from small tasks to long-term endeavors. Whether individual or team-based solutions, trust our professionals and grow your business with us.</div>
                    </div>
                        <div className="text-head-3">
                            <Scroll to='anketa' spy={true} smooth={true}>
                                <button className="get-started-button Montserrat-500">
                                    <div className="get-started">Get Started</div>
                                    <div className="arrow-right-get-started"></div>
                                </button>
                            </Scroll>
                        </div>
                </div>

            </div>
        </Container>
    )
}

export default Head;
