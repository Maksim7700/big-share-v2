import '../../../css/portfolio/title.css';

const Title = (props) => {
    return (
        <div className="title-block">
            <div className={`title-logo-block-${props.title}`}></div>
        </div>
    )
}

export default Title;
