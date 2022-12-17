import '../../../../css/technology/languages/language.css';
import '../../../../css/hover.css';
import '../../../../css/laptop.css';

const Box = (props) => {
    console.log(props.className)
    return (
        <div className='box'>
             <div className={`box-image`}> <img alt={`${props.className}`} src={`./technologies/${props.className}.svg`}/></div>
             <div className={`Montserrat-500 box-text box-text-${props.className}`}></div>
        </div>
    )
}

export default Box;
