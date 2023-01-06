import Container from '../../UI/Containter';
import '../../../css/anketa/anketa.css';
import Select from './Select';
import { useState } from 'react';
import FormSend from './FormSend';
import '../../../css/hover.css';
import '../../../css/laptop.css';
const serviceTitle = 'What service are you interested in?';
const sizeTitle = 'How big is your project?';
const calendarTitle = 'How much time you have for a development?';
const budgetTitle = 'What is your project budget?';
const formTitle = 'Thanks. We just need a few details about you.';

const step1 = 'Step 1 of 5';
const step2 = 'Step 2 of 5';
const step3 = 'Step 3 of 5';
const step4 = 'Step 4 of 5';

export const service = (serviceClick) => {
  return (
            <>
              <Select myClick={serviceClick} title='Complex of services' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.9199 12.3398C37.9199 15.1198 40.6799 19.5398 41.2399 24.6398" stroke="#7DE2B7" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.97998 24.7395C7.49998 19.6595 10.22 15.2395 14.18 12.4395" stroke="#7DE2B7" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.3799 41.8809C18.6999 43.0609 21.3399 43.7209 24.1199 43.7209C26.7999 43.7209 29.3199 43.1209 31.5799 42.0209" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.1201 15.3993C27.1908 15.3993 29.6801 12.91 29.6801 9.8393C29.6801 6.76859 27.1908 4.2793 24.1201 4.2793C21.0494 4.2793 18.5601 6.76859 18.5601 9.8393C18.5601 12.91 21.0494 15.3993 24.1201 15.3993Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.6601 39.8407C12.7308 39.8407 15.2201 37.3514 15.2201 34.2807C15.2201 31.21 12.7308 28.7207 9.6601 28.7207C6.58939 28.7207 4.1001 31.21 4.1001 34.2807C4.1001 37.3514 6.58939 39.8407 9.6601 39.8407Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M38.34 39.8407C41.4107 39.8407 43.9 37.3514 43.9 34.2807C43.9 31.21 41.4107 28.7207 38.34 28.7207C35.2693 28.7207 32.78 31.21 32.78 34.2807C32.78 37.3514 35.2693 39.8407 38.34 39.8407Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>} num='1'/>
              <Select myClick={serviceClick} title='Design' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_450_1014)">
                <path d="M28.4795 28.9405C28.4795 23.7205 24.2395 19.4805 19.0195 19.4805" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M43.6191 7.87976C40.5391 15.5598 32.8191 25.9998 26.3591 31.1798L22.4191 34.3398C21.9191 34.6998 21.4191 35.0198 20.8591 35.2398C20.8591 34.8798 20.8391 34.4798 20.7791 34.0998C20.5591 32.4198 19.7991 30.8598 18.4591 29.5198C17.0991 28.1598 15.4391 27.3598 13.7391 27.1398C13.3391 27.1198 12.9391 27.0798 12.5391 27.1198C12.7591 26.4998 13.0991 25.9198 13.5191 25.4398L16.6391 21.4998C21.7991 15.0398 32.2791 7.27975 39.9391 4.21975C41.1191 3.77975 42.2591 4.09975 42.9791 4.83975C43.7391 5.57975 44.0991 6.71976 43.6191 7.87976Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.4996 7.69922L15.0996 15.0992" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M40.2403 25.4609L34.3203 31.3609" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M20.8605 35.2416C20.8605 37.4416 20.0205 39.5416 18.4405 41.1416C17.2205 42.3616 15.5605 43.2016 13.5805 43.4616L8.66055 44.0016C5.98055 44.3016 3.68055 42.0216 4.00055 39.3016L4.54055 34.3816C5.02055 30.0016 8.68055 27.2016 12.5605 27.1216C12.9605 27.1016 13.3805 27.1216 13.7605 27.1416C15.4605 27.3616 17.1205 28.1416 18.4805 29.5216C19.8205 30.8616 20.5805 32.4216 20.8005 34.1016C20.8205 34.4816 20.8605 34.8616 20.8605 35.2416Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M40.2395 25.4609L41.7195 26.9209C44.6995 29.9009 44.6995 32.8409 41.7195 35.8209L35.7995 41.7409C32.8595 44.6809 29.8795 44.6809 26.9395 41.7409" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M6.22062 21.0211C3.28062 18.0411 3.28062 15.1011 6.22062 12.1211L12.1406 6.20109C15.0806 3.26109 18.0606 3.26109 21.0006 6.20109L22.4806 7.68109" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round"/>
                </g>
                <defs>
                <clipPath id="clip0_450_1014">
                <rect width="48" height="48" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              } num='2'/>
              <Select myClick={serviceClick} title='Web development' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 34.4414V44.0014" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 26H44" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.88 4H35.1C42.22 4 44 5.78 44 12.88V25.54C44 32.66 42.22 34.42 35.12 34.42H12.88C5.78 34.44 4 32.66 4 25.56V12.88C4 5.78 5.78 4 12.88 4Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 44H33" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>} num='3'/>
              <Select myClick={serviceClick} title='Mobile development' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 14V34C40 42 38 44 30 44H18C10 44 8 42 8 34V14C8 6 10 4 18 4H30C38 4 40 6 40 14Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28.001 11H20.001" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.0004 38.2C25.7125 38.2 27.1004 36.8121 27.1004 35.1C27.1004 33.3879 25.7125 32 24.0004 32C22.2883 32 20.9004 33.3879 20.9004 35.1C20.9004 36.8121 22.2883 38.2 24.0004 38.2Z" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>} num='4'/>
              <Select myClick={serviceClick} title='Other' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.1799 24.52C36.8464 24.52 41.4399 19.9265 41.4399 14.26C41.4399 8.59357 36.8464 4 31.1799 4C25.5135 4 20.9199 8.59357 20.9199 14.26C20.9199 19.9265 25.5135 24.52 31.1799 24.52Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M12.72 38.8806C16.1221 38.8806 18.8801 36.1226 18.8801 32.7206C18.8801 29.3185 16.1221 26.5605 12.72 26.5605C9.31796 26.5605 6.56006 29.3185 6.56006 32.7206C6.56006 36.1226 9.31796 38.8806 12.72 38.8806Z" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M33.24 43.9998C36.0677 43.9998 38.36 41.7075 38.36 38.8798C38.36 36.0521 36.0677 33.7598 33.24 33.7598C30.4123 33.7598 28.12 36.0521 28.12 38.8798C28.12 41.7075 30.4123 43.9998 33.24 43.9998Z" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>} num='5'/>
            </>
  )
}

export const size = (serviceClick) => {
  return (
            <>
              <Select myClick={serviceClick} title='XS' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 22H17C15.34 22 14 23.34 14 25V44H34V25C34 23.34 32.66 22 31 22Z" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 44H44" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.90002 44.0005L6.00003 19.9405C6.00003 18.7205 6.58002 17.5606 7.54002 16.8006L21.54 5.90055C22.98 4.78055 25 4.78055 26.46 5.90055L40.46 16.7806C41.44 17.5406 42 18.7005 42 19.9405V44.0005" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
                <path d="M20 32.5V35.5" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 15H27" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>} num='6'/>
              <Select myClick={serviceClick} title='S' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 34H22C20.34 34 19 35.34 19 37V44H29V37C29 35.34 27.66 34 26 34Z" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
                <path d="M4 44H44" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.90002 44.0005L6.00002 19.9405C6.00002 18.7205 6.58002 17.5606 7.54002 16.8006L21.54 5.90055C22.98 4.78055 25 4.78055 26.46 5.90055L40.46 16.7806C41.44 17.5406 42 18.7005 42 19.9405V44.0005" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
                <path d="M19 27.5H15C13.9 27.5 13 26.6 13 25.5V22.5C13 21.4 13.9 20.5 15 20.5H19C20.1 20.5 21 21.4 21 22.5V25.5C21 26.6 20.1 27.5 19 27.5Z" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
                <path d="M33 27.5H29C27.9 27.5 27 26.6 27 25.5V22.5C27 21.4 27.9 20.5 29 20.5H33C34.1 20.5 35 21.4 35 22.5V25.5C35 26.6 34.1 27.5 33 27.5Z" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
                <path d="M38 14L37.94 8H29.14" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                } num='7'/>
              <Select myClick={serviceClick} title='M' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 44V36.5" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M39.5601 44.0197V35.0996" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 44H46" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M39.6 21.7793C37.16 21.7793 35.2 23.7393 35.2 26.1793V30.7192C35.2 33.1592 37.16 35.1193 39.6 35.1193C42.04 35.1193 44 33.1592 44 30.7192V26.1793C44 23.7393 42.04 21.7793 39.6 21.7793Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.19995 43.9995V12.0596C4.19995 8.03957 6.20005 6.01953 10.1801 6.01953H22.64C26.62 6.01953 28.6 8.03957 28.6 12.0596V43.9995" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.6001 16.5H21.5001" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.6001 24H21.5001" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                } num='8'/>
              <Select myClick={serviceClick} title='L' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.9995 44.0007H8.15945C5.83945 44.0007 3.93945 42.1407 3.93945 39.8607V10.1807C3.93945 4.9407 7.83945 2.5607 12.6195 4.9007L21.4995 9.2607C23.4195 10.2007 24.9995 12.7007 24.9995 14.8207V44.0007Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M43.9395 30.1198V37.6798C43.9395 41.9998 41.9395 43.9998 37.6195 43.9998H24.9995V20.8398L25.9395 21.0398L34.9395 23.0598L38.9995 23.9598C41.6395 24.5398 43.7995 25.8998 43.9195 29.7398C43.9395 29.8598 43.9395 29.9798 43.9395 30.1198Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.9995 18H17.9395" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.9995 26H17.9395" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M34.9395 23.061V29.501C34.9395 31.981 32.9195 34.001 30.4395 34.001C27.9595 34.001 25.9395 31.981 25.9395 29.501V21.041L34.9395 23.061Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M43.9195 29.7405C43.7995 32.1005 41.8395 34.0005 39.4395 34.0005C36.9595 34.0005 34.9395 31.9805 34.9395 29.5005V23.0605L38.9995 23.9605C41.6395 24.5405 43.7995 25.9005 43.9195 29.7405Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                } num='9'/>
              <Select myClick={serviceClick} title='XL' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 44H44" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M34 4H14C8 4 6 7.58 6 12V44H42V12C42 7.58 40 4 34 4Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 33H20" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28 33H34" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 24H20" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28 24H34" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 15H20" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28 15H34" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                } num='10'/>
            </>
  )
}

export const calendar = (serviceClick) => {
  return (
    <>
      <Select myClick={serviceClick} title='Less than 1 month' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 18.1797H41" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 17V34C42 40 39 44 32 44H16C9 44 6 40 6 34V17C6 11 9 7 16 7H32C39 7 42 11 42 17Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='11'/>
      <Select qmyClick={serviceClick} title='1-2 months' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 18.1797H41" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 17V34C42 40 39 44 32 44H16C9 44 6 40 6 34V17C6 11 9 7 16 7H32C39 7 42 11 42 17Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5886 27.4004H16.6066" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5886 33.4004H16.6066" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='12'/>
      <Select myClick={serviceClick} title='2-4 months' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 18.1797H41" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 17V34C42 40 39 44 32 44H16C9 44 6 40 6 34V17C6 11 9 7 16 7H32C39 7 42 11 42 17Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.991 27.4004H24.0089" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.991 33.4004H24.0089" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5886 27.4004H16.6066" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5886 33.4004H16.6066" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='13'/>
      <Select myClick={serviceClick} title='4-6 months' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 18.1797H41" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 17V34C42 40 39 44 32 44H16C9 44 6 40 6 34V17C6 11 9 7 16 7H32C39 7 42 11 42 17Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.3894 27.4004H31.4074" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.3894 33.4004H31.4074" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.991 27.4004H24.0089" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.991 33.4004H24.0089" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5886 27.4004H16.6066" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5889 33.4004H16.6068" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='14'/>
      <Select myClick={serviceClick} title='More than 6 months' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 4V10" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 18.1797H41" stroke="#7DE2B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M44 38C44 39.5 43.58 40.92 42.84 42.12C41.46 44.44 38.92 46 36 46C33.98 46 32.14 45.26 30.74 44C30.12 43.48 29.58 42.84 29.16 42.12C28.42 40.92 28 39.5 28 38C28 33.58 31.58 30 36 30C38.4 30 40.54 31.06 42 32.72C43.24 34.14 44 35.98 44 38Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.8799 37.9991L34.8599 39.9791L39.1199 36.0391" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 17V32.72C40.54 31.06 38.4 30 36 30C31.58 30 28 33.58 28 38C28 39.5 28.42 40.92 29.16 42.12C29.58 42.84 30.12 43.48 30.74 44H16C9 44 6 40 6 34V17C6 11 9 7 16 7H32C39 7 42 11 42 17Z" stroke="#0360B2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.1414 27.25H24.1593" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30.989 27.25H31.007" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.1414 34H24.1593" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.739 27.25H16.757" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.739 34H16.757" stroke="#7DE2B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='15'/>
    </>
  )
}

export const budget = (serviceClick) => {
  return (
    <>
      <Select myClick={serviceClick} title='Less than $1k' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 38H14C6 38 4 36 4 28V20C4 12 6 10 14 10H26C34 10 36 12 36 20V28C36 36 34 38 26 38Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41 19C44 19 44 20 44 22V26C44 28 44 29 41 29" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='16'/>
      <Select myClick={serviceClick} title='$1k-3k' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 38H14C6 38 4 36 4 28V20C4 12 6 10 14 10H26C34 10 36 12 36 20V28C36 36 34 38 26 38Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41 19C44 19 44 20 44 22V26C44 28 44 29 41 29" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.7598 20C13.4198 22.62 13.4198 25.38 12.7598 28" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='17'/>
      <Select myClick={serviceClick} title='$3k-6k' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41 19C44 19 44 20 44 22V26C44 28 44 29 41 29" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.7598 20C13.4198 22.62 13.4198 25.38 12.7598 28" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.7598 20C20.4198 22.62 20.4198 25.38 19.7598 28" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26 38H14C6 38 4 36 4 28V20C4 12 6 10 14 10H26C34 10 36 12 36 20V28C36 36 34 38 26 38Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='18'/>
      <Select myClick={serviceClick} title='$6k-10k' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41 19C44 19 44 20 44 22V26C44 28 44 29 41 29" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.7598 20C13.4198 22.62 13.4198 25.38 12.7598 28" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.7598 20C20.4198 22.62 20.4198 25.38 19.7598 28" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.7598 20C27.4198 22.62 27.4198 25.38 26.7598 28" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26 38H14C6 38 4 36 4 28V20C4 12 6 10 14 10H26C34 10 36 12 36 20V28C36 36 34 38 26 38Z" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='19'/>
      <Select myClick={serviceClick} title='More than $10k' image={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41 19C44 19 44 20 44 22V26C44 28 44 29 41 29" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.9999 16L16.2199 21C15.4399 22.34 16.3999 24 17.9399 24H22.5399C24.0799 24 25.0399 25.66 24.2799 27L19.9999 32" stroke="#7DE2B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 38C6 38 4 36 4 28V20C4 12 6 10 14 10" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26 10C34 10 36 12 36 20V28C36 36 34 38 26 38" stroke="#0360B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        } num='20'/>
    </>
  )
}


const Anketa = () => {

  const [isService, setIsService] = useState(true);
  const [isSize, setIsSize] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isBudget, setIsBudget] = useState(false);
  const [isForm, setIsForm] = useState(false);

  const serviceClick = () => {
    if (isService) {
      setIsService(false);
      setIsSize(true);
    }
    if (isSize) {
      setIsSize(false);
      setIsCalendar(true);
    }
    if (isCalendar) {
      setIsCalendar(false);
      setIsBudget(true);
    }
    if (isBudget) {
      setIsBudget(false);
      setIsForm(true);
    }
  }

  const serviceBackClick = () => {
    if (isForm) {
      setIsBudget(true);
      setIsForm(false);
    }
    if (isBudget) {
      setIsCalendar(true);
      setIsBudget(false);
    }
    if (isCalendar) {
      setIsSize(true);
      setIsCalendar(false);
    }
    if (isSize) {
      setIsService(true);
      setIsSize(false);
    }
  }


const form = () => {
  return (
    <FormSend form='form' backClick={serviceBackClick}/>
  )
}

  const barLoading = () => {
    return (isService
      ? '1'
      : isSize
        ? '2'
        : isCalendar
          ? '3'
          : isBudget
            ? '4'
            : 'none');
  }

  const bar = () => {
      return <>
      <div className='bar-flex'>
        <div></div>
        <div>
          <div className={`back-button-anketa-under ${isService ? 'display-none' : ''}`}><div onClick={serviceBackClick} className='back-group'><img className={`back-button-size back-button-${barLoading()}`} alt='back button' src='./anketa/anketa-back-arrow.svg'/><div className={`back-form Montserrat-400 ${isService ? ' display-none': ''}`}>Back</div></div></div>
          </div>
          <div className='anketa-bar'>
            <div className='bar'><div className={`bar-load bar-loading-${barLoading()}`}></div></div>
          </div>
          <div></div>
          <div></div>
      </div>
      <div className='level Montserrat-400'>{steps()}</div>
      </>
  }

  const title = () => {
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

  const steps = () => {
    if (isService) {
      return <div>{step1}</div>
    }
    if (isSize) {
      return<div> {step2}</div>
    }
    if (isCalendar) {
      return <div>{step3}</div>
    }
    if (isBudget) {
      return <div>{step4}</div>
    }
    if (isForm) {
      return ''
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
                    : form());
  }

  return(
    <div>
      <Container>
        <div className='flex-container-anketa em-02'>
          <div id='anketa' className='anketa-title Gilroy-700'>Let's <span>get started</span>. Tell us how we can help</div>
          <div className='anketa-text Montserrat-400'>Let’s turn your idea into digital reality! Just answer our interactive questions and we will draft the best product offer for you. We provide free estimation and IT consulting for our clients. So don’t hesitate to contact us.</div>
          <div className='anketa-question'><div className='anketa-question-text Gilroy-500'>{title()}</div></div>
          <div className={`anket-question-style ${isForm ? 'anketa-question-blog-no' : 'anketa-question-blog'}`}>
            {
              getAnketaForm(serviceClick)
            }
          </div>
        </div>
        {isForm ? '' : bar()}
      </Container>
    </div>
  )
}

export default Anketa;
