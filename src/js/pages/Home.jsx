import Anketa from '../components/anketa/Anketa';
import Blog from '../components/blog/Blog';
import Client from "../components/client/Client";
import Main from "../components/head/Main";
import Portfolio from "../components/portfolio/Portfolio";
import Service from "../components/service/Service";
import Technology from "../components/technology/Technology";


const Home = () => {
    return (
        <>
            <Main/>
            <Service />
            <Technology />
            <Client />
            <Portfolio />
            <Blog />
            <Anketa />
        </>
    );
}

export default Home;
