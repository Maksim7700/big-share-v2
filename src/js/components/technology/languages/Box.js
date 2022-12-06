import '../../../../css/technology/languages/language.css';

const Box = (props) => {
    return (
        <div className='box'>
             <div className={`box-image box-image-${props.className}`}></div>
             <div className={`Montserrat-500 box-text box-text-${props.className}`}></div>
        </div>
    )
}

export default Box;