import Container from '../../UI/Containter';
import '../../../css/anketa/anketa.css';
import Select from './Select';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import FormSend from './FormSend';

const serviceTitle = 'What service are you interested in?';
const sizeTitle = 'How big is your project?';
const calendarTitle = 'How much time you have for a development?';
const budgetTitle = 'What is your project budget?';
const formTitle = 'Thanks. We just need a few details about you.';
export const service = (serviceClick) => {
  return (
            <>
              <Select myClick={serviceClick} title='Complex of services' image='complex_service.svg'/>
              <Select myClick={serviceClick} title='Design' image='design.svg'/>
              <Select myClick={serviceClick} title='Web development' image='mobile_dev.svg'/>
              <Select myClick={serviceClick} title='Mobile development' image='web_dev.svg'/>
              <Select myClick={serviceClick} title='Other' image='other.svg'/>
            </>
  )
}

export const size = (serviceClick) => {
  return (
            <>
              <Select myClick={serviceClick} title='XS' image='size-xs.svg'/>
              <Select myClick={serviceClick} title='S' image='size-s.svg'/>
              <Select myClick={serviceClick} title='M' image='size-m.svg'/>
              <Select myClick={serviceClick} title='L' image='size-l.svg'/>
              <Select myClick={serviceClick} title='XL' image='size-xl.svg'/>
            </>
  )
}

export const calendar = (serviceClick) => {
  return (
    <>
      <Select myClick={serviceClick} title='Less than 1 month' image='calendar-1.svg'/>
      <Select myClick={serviceClick} title='1-2 months' image='calendar-2.svg'/>
      <Select myClick={serviceClick} title='2-4 months' image='calendar-3.svg'/>
      <Select myClick={serviceClick} title='4-6 months' image='calendar-4.svg'/>
      <Select myClick={serviceClick} title='More than 6 months' image='calendar-5.svg'/>
    </>
  )
}

export const form = () => {
  return (
    <FormSend form='form'/>
  )
}

export const budget = (serviceClick) => {
  return (
    <>
      <Select myClick={serviceClick} title='Less than $1k' image='budget-1.svg'/>
      <Select myClick={serviceClick} title='$1k-3k' image='budget-2.svg'/>
      <Select myClick={serviceClick} title='$3k-6k' image='budget-3.svg'/>
      <Select myClick={serviceClick} title='$6k-10k' image='budget-4.svg'/>
      <Select myClick={serviceClick} title='More than $10k' image='budget-5.svg'/>
    </>
  )
}


const Anketa = () => {

  const [isService, setIsService] = useState(true);
  const [isSize, setIsSize] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isBudget, setIsBudget] = useState(false);
  const [isForm, setIsForm] = useState(false);

  const title = () => {
    console.log(isService);
    if (isService) {
      return <div>{serviceTitle}</div>
    }
    if (isSize) {
      return<div> {sizeTitle}</div>
    }
    if (isCalendar) {
      return <div>{calendarTitle}</div>
    }
    if (isBudget) {
      return <div>{budgetTitle}</div>
    }
    if (isForm) {
      return <div>{formTitle}</div>
    }
  }

  const serviceClick = () => {
    if (isService) {
      setIsService(false);
      setIsSize(true);
      setIsCalendar(false);
      setIsBudget(false);
    }
    if (isSize) {
      setIsService(false);
      setIsSize(false);
      setIsCalendar(true);
      setIsBudget(false);
    }
    if (isCalendar) {
      setIsService(false);
      setIsSize(false);
      setIsCalendar(false);
      setIsBudget(true);
    }
    if (isBudget) {
      setIsService(false);
      setIsSize(false);
      setIsCalendar(false);
      setIsBudget(false);
      setIsForm(true);
    }
  }

  const getAnketaForm = (serviceClick) => {
    return (isService
              ? service(serviceClick)
              : isSize
                ? size(serviceClick)
                : isCalendar
                  ? calendar(serviceClick)
                  : isBudget
                    ? budget(serviceClick)
                    : form(serviceClick));
  }

  return(
    <div>
      <Container>
        <div className='flex-container-anketa em-02'>
          <div className='anketa-title Gilroy-700'>Let's <span>get started</span>. Tell us how we can help</div>
          <div className='anketa-text Montserrat-400'>Let’s turn your idea into digital reality! Just answer our interactive questions and we will draft the best product offer for you. We provide free estimation and IT consulting for our clients. So don’t hesitate to contact us.</div>
          <div className='anketa-question'><div className='anketa-question-text Gilroy-500'>{title()}</div></div>
          <div className={`${isForm ? 'anketa-question-blog-no' : 'anketa-question-blog'}`}>
            {
              getAnketaForm(serviceClick)
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Anketa;
