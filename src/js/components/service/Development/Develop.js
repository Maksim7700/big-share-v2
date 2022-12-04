import '../../../../css/service/development/develop.css'
import '../../../../css/fonts/fonts.css';

const Develop = (props) => {
    const imageNumber = props.imageNumber;
    const title = props.title;
    const text = props.text;
    
    return (
        <div className={`flex-containter-develop-inside ${props.className}`}>
            <div className={`develop-image develop-image-${imageNumber}`}></div>
            <div className={`develo-title Gilroy-500`}>{title}</div>
            <div className={`develop-text Montserrat-400 text-${props.className}`}>{text}</div>
        </div>
    )
}


export default Develop;