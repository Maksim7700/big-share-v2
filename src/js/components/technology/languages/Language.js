import { useState } from 'react';
import '../../../../css/technology/languages/language.css';
import Box from './Box';

const Language = () => {

    const [isDesign, setIsDesign] = useState(true);
    const [isWeb, setIsWeb] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const setDesign = () => {
        setIsDesign(true);
        setIsWeb(false);
        setIsMobile(false);
    }

    const setWeb = () => {
        setIsDesign(false);
        setIsWeb(true);
        setIsMobile(false);
    }

    const setMobile = () => {
        setIsDesign(false);
        setIsWeb(false);
        setIsMobile(true);
    }

    return (
        <div className="flex-container-language em-02">
            <div className='flex-containter-buttons Montserrat-500'>
                <button className={`Montserrat-500 ${isDesign ? 'green' : ''} tech-button-hover`} onClick={setDesign}><span>Design</span></button>
                <button className={`Montserrat-500 ${isWeb ? 'green' : ''} tech-button-hover`} onClick={setWeb}><span>Web dev.</span></button>
                <button className={`Montserrat-500 ${isMobile ? 'green' : ''} tech-button-hover`} onClick={setMobile}><span>Mobile dev.</span></button>
            </div>
            <div className='flex-container-technologies-box'>
                {isDesign && <>
                <Box className='figma'/>
                <Box className='photoshop'/>
                <Box className='illustrator'/>
                <Box className='after-effects'/>
                <Box className='indesign'/>
                </>}
                {isWeb && <>
                <Box className='javascript'/>
                <Box className='css'/>
                <Box className='react'/>
                <Box className='wordpress'/>
                <Box className='html'/>
                </>}
                {isMobile && <>
                <Box className='java'/>
                <Box className='kotlin'/>
                <Box className='react-native'/>
                <Box className='angular'/>
                <Box className='flutter'/>
                </>}
            </div>
        </div>
    )

}


export default Language;
