import '../../../css/head/main.css';
import Head from "../head/Head";
import '../../../css/laptop.css';
import ParticlesComponent from './ParticlesComponent';

const Main = () => {
    return (
        <div className="main">
            <ParticlesComponent id="particles" />
            <Head />
        </div>
    );
}

export default Main;
