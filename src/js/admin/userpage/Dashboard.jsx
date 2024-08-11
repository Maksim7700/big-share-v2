import { useEffect, useState } from "react";
import { fetchUserData, logout } from "../service/authenticationService";
import { useNavigate } from "react-router-dom";
import './dashboard.scss';
import Container from "../../UI/Containter";

const Dashboard = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState();

    useEffect(() => {
        fetchUserData(user).then(res => setUser(res.data));
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Container>
            <div>
                {user &&
                <>
                    <div className="dashboard">

                    <div className="user">
                        <h1>Hello! Role is {user.username.toUpperCase()}</h1>
                    </div>
                    <div className="logout-div">
                    <button className="logout" onClick={() => {logout().then(() => navigate('/login'))}}>Logout</button>
                    </div>
                    </div>

                </>
                }
            </div>
            </Container>
        </>
    )
}

export default Dashboard;