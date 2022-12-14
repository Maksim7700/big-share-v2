import Container from "../../UI/Containter";
import Comment from "./Comment";
import Project from "./Project";
import '../../../css/client/client.css';
import '../../../css/laptop.css';
import { useEffect, useState } from 'react';
import MobileClient from './MobileClient';

const Client = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }
      useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    return (
        <div className="client">
            <Container>
                <div className="flex-containter-client">
                    <div><Comment /></div>
                    {windowSize.innerWidth <= 1140 ? <MobileClient/> : <Project />}
                </div>
            </Container>
        </div>
    )
}

export default Client;
