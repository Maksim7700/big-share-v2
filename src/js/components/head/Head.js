
import '../../../css/head/head.css';
import '../../../css/all.css';
import Container from '../../UI/Containter';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import {Link as Scroll} from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import video from '../../../video/video.mp4';

const Head = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <Container>
            <video src={video} autoPlay loop muted/>
            <div className='flex-head-container' data-aos='fade-up'>
                <div className="flex-containte-head em-02">
                    <div className="text-head-1 Gilroy-700">Let’s Make Software<br/> <span>Together</span></div>
                    <div className="text-head-2 Montserrat-400">Big or small, immediate or ongoing projects, individual or team-based projects: get them all done with Big Share professionals.
                        Develop your business together with us.</div>
                    <Scroll to='anketa' spy={true} smooth={true}>
                        <div className="text-head-3">
                            <button className="get-started-button Montserrat-500">
                                <div className="get-started">Get Started</div>
                                <div className="arrow-right-get-started"></div>
                            </button>
                        </div>
                    </Scroll>
                </div>

            </div>
        </Container>
    )
}

export default Head;
