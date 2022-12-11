
import '../../../css/head/head.css';
import '../../../css/all.css';
import Container from '../../UI/Containter';
import '../../../css/hover.css';

const Head = () => {
    return (
        <Container>
            <div className="flex-containte-head em-02">
                <div className="text-head-1 Gilroy-700">Let’s make software<br/> <span>Together</span></div>
                <div className="text-head-2 Montserrat-500">Big or small, immediate or ongoing projects, individual or team-based projects: get them all done with Big Share professionals.
                    <br/>Develop your business together with us.</div>
                <div className="text-head-3"><button className="get-started-button Montserrat-600"><div className="get-started">Get Started</div><div className="arrow-right-get-started"></div></button></div>
            </div>
        </Container>
    )
}

export default Head;
