import './leader.scss';

const Leader = ({src, title, name}) => {
    return (
        <div className="leader">
            <img src={src} alt="Leader" loading="lazy"/>
            <div className="leader-title">{title}</div>
            <div className="leader-name">{name}</div>
        </div>
    )
}

export default Leader;