import '../../../css/footer/footer.css';
import Container from '../../UI/Containter';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='flex-container-footer'>
          <div className='footer-navigation'>
            <div className='footer-bigshare'><img alt='bigshare' /></div>
            <div className='flex-container-navigation-footer Montserrat-500'>
              <div>Home</div>
              <div>Portfolio</div>
              <div>We are hiring</div>
              <div>Blog</div>
            </div>
            <div className='flex-container-social'>
              <img className='linkedin' alt='linkedin'/>
              <img className='behance' alt='behance' />
              <img className='instagram' alt='instagram' />
            </div>
          </div>
          <div><hr/></div>
          <div className='footer-bottom Montserrat-400'>
            <div className='location'>
              <img alt='location' />
              <div className='location-street'>Sakharova street, Lviv, Ukraine</div>
            </div>
            <div className='conditions'>
              <div>Term of Use</div>
              <div>Privacy Policy</div>
            </div>
            <div className='gmail'>
              <img alt='gmail' />
              <div className='email'>bigshareua@gmail.com</div>
              </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
