import Container from "../../UI/Containter";
import '../../../css/service/service.css'
import Develop from "./Development/Develop";

const Service = () => {
    return (
        <Container>
            <div className="flex-containter-service em-02">
                <div className="service-1 Gilroy-700">At your <span>service,</span> every step of the way</div>
                <div className="service-2"><div className="service-2-text em-02 Montserrat-400">Innowise Group can cover the entire software development process, from product vision discussion to applications design and software enhancement. Our multi-skilled experienced team facilitates businesses worldwide on their way to digital transformation and helps companies take full advantage of IT innovations.</div></div>
                <div className="service-3">
                    <div>
                        <Develop className='develop-1' 
                            imageNumber='1' 
                            title='Ecommerce Development' 
                            text='Today’s business world is competitive, and while it’s relatively easy to get started, it’s very hard to rise to the top. We can help. Set your mind at ease by taking this opportunity to learn more about how Big Share can turn your ecommerce project into an income-generating, sales-making machine.'>
                        </Develop>
                    </div>
                    <div className="flex-containter-service-develop">
                        <Develop className='develop-2'
                            imageNumber='2'
                            title='Branding & Logo Design'
                            text='Just started a business and need a lift? Or just a little refresher? Can do, just hit us up! Research, logos, fonts, colors, and even something if you need it.'
                            >
                        </Develop>
                        <Develop className='develop-2'
                            imageNumber='3'
                            title='Web & Mobile Design'
                            text='Create the best user experience. Your users will appreciate fast and clear navigation, easy transitions, seamless flow, and beautiful looks. Our approach to design is to solve user and business problems and make the experience of using your product delightful.'>
                        </Develop>
                    </div>
                    <div className="flex-containter-service-develop margin-bottom-204">
                        <Develop className='develop-2'
                            imageNumber='4'
                            title='Web Development'
                            text='Get top-notch talent that will do its best to create a great web application. All of our engineers follow coding standards and our internal rules to write clean code. We will make sure that the delivered product meets your expectations and needs of users.'
                            >
                        </Develop>
                        <Develop className='develop-2'
                            imageNumber='5'
                            title='Mobile Development'
                            text='Deliver speed, flexibility and mobility with our bespoke app development services. We ensure your apps meet users wherever they are, and work across any range of device types.'>
                        </Develop>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Service;