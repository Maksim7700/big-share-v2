import { useForm } from 'react-hook-form';
import '../../../css/anketa/form.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import {postQuestionnaire} from '../../client/questionnaireClient';

const FormSend = (props) => {


  const isForm = props.form;

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      questionnaire: props.questionnaire,
      email: '',
      name: '',
      phone: '',
      company: '',
      comment: ''
    }
  });

  const onSubmit = (data) => {
    postQuestionnaire(data);
  }

  return (
    <div>
      <form className='flex-container-form' onSubmit={handleSubmit(onSubmit)}>
        <input className={`Montserrat-400 input-big-share ${errors.email ? 'error' : ''}`} type="text" placeholder="Your email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        <input className='Montserrat-400 input-big-share' type="text" placeholder="Your name (Oprional)" {...register("name", { required: false, maxLength: 100 })} />
        <input className='Montserrat-400 input-big-share' type="tel" placeholder="Your phone (Optional)" {...register("phone", { required: false, minLength: 6, maxLength: 12 })} />
        <input className='Montserrat-400 input-big-share' type="text" placeholder="Your company (Optional)" {...register("company", { required: false, maxLength: 100 })} />
        <input className='Montserrat-400 input-big-share' type="text" placeholder="Your comment (Optional)" {...register("comment", {})} />
        <div></div>
        <div></div>
        <div></div>
        <div className={`flex-container-back em-02 ${isForm === 'form' ? 'back-button-anketa' : 'hidden'}`}><div onClick={props.backClick} className='back-group'><img className='back-button-size' alt='back' src='./anketa/anketa-back-arrow.svg'/><div className='back-form Montserrat-400'>Back</div></div></div>
        <input className='submit Montserrat-500' type="submit" value='Create with Big Share'/>
      </form>
    </div>
  );
}

export default FormSend;
