import { useForm } from 'react-hook-form';
import '../../../css/anketa/form.css';

const FormSend = (props) => {

  const isForm = props.form;

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      company: '',
      comment: ''
    }
  });

  return (
    <div>
      <form className='flex-container-form' onSubmit={handleSubmit(console.log)}>
        <input className={`Montserrat-400 ${errors.email ? 'error' : 'input-big-share'}`} type="text" placeholder="Your email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        <input className='Montserrat-400 input-big-share' type="text" placeholder="Your name (Oprional)" {...register("name", { required: false, maxLength: 100 })} />
        <input className='Montserrat-400 input-big-share' type="tel" placeholder="Your phone (Optional)" {...register("phone", { required: false, minLength: 6, maxLength: 12 })} />
        <input className='Montserrat-400 input-big-share' type="text" placeholder="Your company (Optional)" {...register("company", { required: false, maxLength: 100 })} />
        <input className='Montserrat-400 input-big-share' type="text" placeholder="Your comment (Optional)" {...register("comment", {})} />
        <div></div>
        <div></div>
        <div></div>
        <div className={`${isForm === 'form' ? 'back-button-anketa' : 'hidden'}`}><img alt='back' src='./anketa/anketa_back.svg'/></div>
        <input className='submit Montserrat-500' type="submit" />
      </form>
    </div>
  );
}

export default FormSend;
