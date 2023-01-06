import '../../../css/footer/footer.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import Container from '../../UI/Containter';
// 2
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='flex-container-footer'>
          <div className='footer-navigation'>
            <div className='footer-bigshare'><img alt='bigshare' src='./footer/bigshare-logo-footer.svg'/></div>
            {/* <div className='flex-container-navigation-footer Montserrat-500'>
              <div className='hover-footer'>Home</div>
              <div className='hover-footer'>Portfolio</div>
              <div className='hover-footer'>We are hiring</div>
              <div className='hover-footer'>Blog</div>
            </div> */}
            <div className='flex-container-social'>
            <a target={"_blank"} href='https://www.linkedin.com/company/big-share/about/?viewAsMember=true' rel="noreferrer"><img className='linkedin' alt='linkedin' src='./footer/linkedin.svg'/></a>
            <a target={"_blank"} href='https://www.behance.net/bigshare' rel="noreferrer"><img className='behance' alt='behance' src='./footer/behance.svg'/></a>
            <a target={"_blank"} href='https://www.instagram.com/bigshare_/' rel="noreferrer"><img className='instagram' alt='instagram'src='./footer/instagram.svg'/></a>
            </div>
          </div>
          <div>
            <hr/>
          </div>
          <div className='footer-bottom Montserrat-400'>
            <div className='location'>
              <div className='location-inside'>
                <img alt='location' src='./footer/location.svg'/>
                <div className='location-street'>Sakharova street, Lviv, Ukraine</div>
              </div>
            </div>
            <div className='conditions'>
              <div className='hover-footer term-privacy'>Term of Use</div>
              <div className='hover-footer term-privacy'>Privacy Policy</div>
            </div>
            <a target={"_blank"} href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdTRqCDKHVlPZvPqGDrjszfmMmTGHKjGlphzLtxPjFCQrbfSWVRBkltzxqcdBZFXgDRdg' rel="noreferrer">
              <div className='gmail'>
                <div className='gmail-inside'>
                  <img alt='gmail' src='./footer/gmail.svg'/>
                  <div className='email'>
                    bigshareua@gmail.com
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
