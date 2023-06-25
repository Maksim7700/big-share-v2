import '../../../css/portfolio/block.css';
import '../../../css/hover.css';
import Title from './Title';
import '../../../css/laptop.css';

function Block({ title, logo, text, className }) {
  return (
    <div className={`block ${className}`}>
      <div className='flex-container-inside-block'>
        <div className='block-title'>
          <Title title={title} text={text} />
        </div>
        <div className='block-logo'>
          <img className={`portfolio-logo-${logo}`} alt='portfolio' />
        </div>
      </div>
    </div>
  );
}

export default Block;

