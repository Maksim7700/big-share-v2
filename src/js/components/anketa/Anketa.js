import Container from '../../UI/Containter';
import '../../../css/anketa/anketa.css';
import Select from './Select';

const Anketa = () => {
  return(
    <div>
      <Container>
        <div className='flex-container-anketa em-02'>
          <div className='anketa-title Gilroy-700'>Let's <span>get started</span>. Tell us how we can help</div>
          <div className='anketa-text Montserrat-400'>Let’s turn your idea into digital reality! Just answer our interactive questions and we will draft the best product offer for you. We provide free estimation and IT consulting for our clients. So don’t hesitate to contact us.</div>
          <div className='anketa-question'><div className='anketa-question-text Gilroy-500'>What service are you interested in?</div></div>
          <div className='anketa-question-blog'>
            {service()}
          </div>
        </div>
      </Container>
    </div>
  )
}

const service = () => {
  return (
            <>
              <Select title='Complex of services' image='complex_service.svg'/>
              <Select title='Design' image='design.svg'/>
              <Select title='Web development' image='mobile_dev.svg'/>
              <Select title='Mobile development' image='web_dev.svg'/>
              <Select title='Other' image='other.svg'/>
            </>
  )
}

// const size = () => {
//   return (
//             <>
//               <Select title='XS' image='size-xs.svg'/>
//               <Select title='S' image='size-s.svg'/>
//               <Select title='M' image='size-m.svg'/>
//               <Select title='L' image='size-l.svg'/>
//               <Select title='XL' image='size-xl.svg'/>
//             </>
//   )
// }

// const calendar = () => {
//   return (
//     <>
//       <Select title='Less than 1 month' image='calendar-1.svg'/>
//       <Select title='1-2 months' image='calendar-2.svg'/>
//       <Select title='2-4 months' image='calendar-3.svg'/>
//       <Select title='4-6 months' image='calendar-4.svg'/>
//       <Select title='More than 6 months' image='calendar-5.svg'/>
//     </>
//   )
// }

// const budget = () => {
//   return (
//     <>
//       <Select title='Less than $1k' image='budget-1.svg'/>
//       <Select title='$1k-3k' image='budget-2.svg'/>
//       <Select title='$3k-6k' image='budget-3.svg'/>
//       <Select title='$6k-10k' image='budget-4.svg'/>
//       <Select title='More than $10k' image='budget-5.svg'/>
//     </>
//   )
// }

export default Anketa;
