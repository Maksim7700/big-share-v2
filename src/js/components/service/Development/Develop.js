import '../../../../css/service/development/develop.css'
import '../../../../css/fonts/fonts.css';
import '../../../../css/hover.css';
import '../../../../css/laptop.css';

const Develop = (props) => {
    const imageNumber = props.imageNumber;
    const title = props.title;
    const text = props.text;
    const classNames = props.className.split( )[0];

    return (
        <div className={`flex-containter-develop-inside ${props.className}`}>
            <div className={`develop-image develop-image-${imageNumber}`}></div>
            <div className={`develo-title Gilroy-500`}>{title}</div>
            <div className={`develop-text Montserrat-400 text-${classNames[0]}`}>{text}</div>
        </div>
    )
}


export default Develop;
