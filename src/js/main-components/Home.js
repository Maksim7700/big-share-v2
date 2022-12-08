import Blog from '../components/blog/Blog';
import Client from "../components/client/Client";
import Footer from '../components/footer/footer';
import Main from "../components/head/Main";
import Portfolio from "../components/portfolio/Portfolio";
import Service from "../components/service/Service";
import Technology from "../components/technology/Technology";


const Home = () => {
    return (
        <div>
            <Main/>
            <Service />
            <Technology />
            <Client />
            <Portfolio />
            <Blog />
            <Footer />
        </div>
    );
}

export default Home;
