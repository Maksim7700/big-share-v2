import '../../../css/anketa/select.css';
import '../../../css/hover.css';

const Select = (props) => {
  const image = props.image;
  const title = props.title;
  return (
    <div onClick={props.myClick} className={`select select-${props.num}`}>
      <img alt={`${image}`} src={`/anketa/${image}`}/>
      <div className='select-title Gilroy-500'>{title}</div>
    </div>
  )
}

export default Select;
