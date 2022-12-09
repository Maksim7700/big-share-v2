import '../../../css/footer/footer.css';
import Container from '../../UI/Containter';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='flex-container-footer'>
          <div className='footer-navigation'>
            <div className='footer-bigshare'><img alt='bigshare' src='./footer/bigshare-logo-footer.svg'/></div>
            <div className='flex-container-navigation-footer Montserrat-500'>
              <div>Home</div>
              <div>Portfolio</div>
              <div>We are hiring</div>
              <div>Blog</div>
            </div>
            <div className='flex-container-social'>
              <img className='linkedin' alt='linkedin' src='./footer/linkedin.svg'/>
              <img className='behance' alt='behance' src='./footer/behance.svg'/>
              <img className='instagram' alt='instagram'src='./footer/instagram.svg'/>
            </div>
          </div>
          <div><hr/></div>
          <div className='footer-bottom Montserrat-400'>
            <div className='location'>
              <img alt='location' src='./footer/location.svg'/>
              <div className='location-street'>Sakharova street, Lviv, Ukraine</div>
            </div>
            <div className='conditions'>
              <div>Term of Use</div>
              <div>Privacy Policy</div>
            </div>
            <div className='gmail'>
              <img alt='gmail' src='./footer/gmail.svg'/>
              <div className='email'>bigshareua@gmail.com</div>
              </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
