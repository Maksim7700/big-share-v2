import Client from "../components/client/Client";
import Main from "../components/head/Main";
import Service from "../components/service/Service";
import Technology from "../components/technology/Technology";


const Home = () => {
    return (
        <div>
            <Main/>
            <Service />
            <Technology />
            <Client />
        </div>
    );
}

export default Home;