import '../../../css/portfolio/add.css';

const Add = (props) => {
  return (
    <div className={`portfolio-add-block ${props.className}`}>
      <div className='inside-add'>
        <div className='add-text Gilroy-500'>Add my project</div>
        <div className='add-star-image'><img alt='add'/></div>
      </div>
    </div>
  )
}

export default Add;
