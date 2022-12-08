import '../../../css/portfolio/block.css';
import Title from './Title';

const Block = (props) => {

    const title = props.title;
    const logo = props.logo;

    return (
        <div className={`block ${props.className}`}>
            <div className='flex-container-inside-block'>
                <div className='block-title'><Title title={title}/></div>
                <div className='block-logo'><img alt='portfolio' className={`portfolio-logo-${logo}`}/></div>
            </div>
        </div>
    )
}

export default Block;
