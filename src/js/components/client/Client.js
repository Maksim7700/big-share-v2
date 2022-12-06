import Container from "../../UI/Containter";
import Comment from "./Comment";
import Project from "./Project";
import '../../../css/client/client.css';

const Client = () => {
    return (
        <div className="client">
            <Container>
                <div className="flex-containter-client">
                    <div><Comment /></div>
                    <div><Project /></div>
                </div>
            </Container>
        </div>
    )
}

export default Client;