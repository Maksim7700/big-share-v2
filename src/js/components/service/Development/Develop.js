import '../../../../css/service/development/develop.css'
import '../../../../css/fonts/fonts.css';
import '../../../../css/hover.css';
import '../../../../css/laptop.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Develop = (props) => {


    useEffect(() => {
        AOS.init();
    })

    const imageNumber = props.imageNumber;
    const title = props.title;
    const text = props.text;
    const classNames = props.className.split( )[0];

    return (
        <div className={`flex-containter-develop-inside ${props.className}`} data-aos='fade-up'>
            <div className={`develop-image develop-image-${imageNumber}`}></div>
            <div className={`develo-title Gilroy-500`}>{title}</div>
            <div className={`develop-text Montserrat-400 text-${classNames[0]}`}>{text}</div>
        </div>
    )
}


export default Develop;
