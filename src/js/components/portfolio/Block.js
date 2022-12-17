import '../../../css/portfolio/block.css';
import '../../../css/hover.css';
import Title from './Title';
import '../../../css/laptop.css';

const Block = (props) => {

    const title = props.title;
    const logo = props.logo;
    const text = props.text;

    return (
        <div className={`block ${props.className}`}>
            <div className='flex-container-inside-block'>
                <div className='block-title'><Title title={title} text={text}/></div>
                <div className='block-logo'><img alt='portfolio' className={`portfolio-logo-${logo}`}/></div>
            </div>
        </div>
    )
}

export default Block;
