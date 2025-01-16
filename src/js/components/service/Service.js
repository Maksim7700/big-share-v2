import Container from "../../UI/Containter";
import '../../../css/service/service.css'
import Develop from "./Development/Develop";
import '../../../css/laptop.css';
import MouseDecor from "../../svgs/MouseDecor";

const Service = () => {

    return (
        <Container>
                <div className="mid-logo">
                    <MouseDecor />
                </div>
            <div className="flex-containter-service em-02" >
                <h2 className="service-1 Gilroy-700">At your <span>service,</span> every step of the process</h2>
                <div className="service-2"><div className="service-2-text em-02 Montserrat-400">BigShare offers comprehensive software development services, covering everything from product vision discussions to application design and software enhancement. Our skilled, experienced team supports businesses globally in their digital transformation journey, helping companies fully leverage IT innovations</div></div>
                <div className="service-3">
                    <div>
                        <Develop className='develop-1'
                            imageNumber='1'
                            title='Ecommerce Development'
                            text="In today's competitive business environment, it's easy to get started, but reaching the top is challenging. We are here to help. Take the opportunity to learn how Big Share can transform your ecommerce project into a successful and profitable sales-driving machine">
                        </Develop>
                    </div>
                    <div className="flex-containter-service-develop">
                        <Develop className='develop-2'
                            imageNumber='2'
                            title='Branding & Logo Design'
                            text='Started a business and need a boost, or perhaps a quick refresh? We’ve got you covered! From research to logos, fonts, colors, and anything else you might need'
                            >
                        </Develop>
                        <Develop className='develop-2 margin-left-24'
                            imageNumber='3'
                            title='Web & Mobile Design'
                            text='Deliver the best user experience. Your users will love fast, intuitive navigation, smooth transitions, seamless flow, and a visually appealing design. Our design approach focuses on solving both user and business challenges while making the overall experience with your product enjoyable and effortless'>
                        </Develop>
                    </div>
                    <div className="flex-containter-service-develop margin-bottom-204">
                        <Develop className='develop-2'
                            imageNumber='4'
                            title='Web Development'
                            text='Get access to top-tier talent dedicated to creating exceptional web applications. Our engineers adhere to strict coding standards and internal guidelines to ensure clean, efficient code. We guarantee that the final product will meet both your expectations and the needs of your users'
                            >
                        </Develop>
                        <Develop className='develop-2 margin-left-24'
                            imageNumber='5'
                            title='Mobile Development'
                            text='Provide speed, flexibility, and mobility with our custom app development services. We ensure your apps reach users wherever they are and function seamlessly across all device types'>
                        </Develop>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Service;
