import '../../../css/portfolio/title.css';
import '../../../css/laptop.css';

const Title = (props) => {
    return (
        <div className="title-block">
            <div className={`title-logo-block-${props.title}`}></div>
            <div className={`title-text-title text-${props.title}-text Gilroy-500`}>{props.text}</div>
        </div>
    )
}

export default Title;
