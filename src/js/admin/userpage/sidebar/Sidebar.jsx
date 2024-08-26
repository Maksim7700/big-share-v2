import { Link } from "react-router-dom";
import { menu } from "./menu";
import './sidebar.scss';

const Siderbar = () => {
    return (
            <div className="sidebar">
                <div>
                    <img src="../sidebar/dashboard_logo.svg" alt="Logo" />
                </div>
                <div className="items">
                    {menu.map((element) => {
                        return (<Link to={element.to} className="listItem" key={element.title}>
                            <img src={element.logo} alt="logo"/>
                            <span className="listItemItem">{element.title}</span>
                        </Link>)
                    })}
                </div>
            </div>
    )
}

export default Siderbar;