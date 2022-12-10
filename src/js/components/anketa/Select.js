import '../../../css/anketa/select.css';

const Select = (props) => {
  const image = props.image;
  const title = props.title;
  return (
    <div onClick={props.myClick}className='select'>
      <img alt={`${image}`} src={`/anketa/${image}`}/>
      <div className='select-title Gilroy-500'>{title}</div>
    </div>
  )
}

export default Select;
