import '../../../css/blog/article.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Article = () => {
  useEffect(() => {
    AOS.init();
})
  return (
    <div className='flex-container-article' data-aos='fade-up'>
      <div className='under_dev'>
      <div className='UNDER_DEVELOP Gilroy-700'>Under development</div>
      </div>
        <div className='flex-container-left'>
          <div className='article-title Gilroy-500'>JavaScript</div>
          <div className='article-text Montserrat-400'>We estimate professional knowledge and expertise as the most valuable things a company should possess. Our blog is a platform for promoting and sharing those things to make the knowledge work for the goals and for the best purposes.</div>
          <div className='article-read-me Montserrat-400'>
            <div className='read-me-text'>Read more</div>
            <img alt='right-arrow-read-more' src='./blog/arrow-right-read-more.svg' />
          </div>
        </div>
        <div className='flex-container-right'>
          <img alt='logo-blog' height={223} width={427} src='./blog/blog_blog.svg'/>
        </div>
    </div>
  )
}

export default Article;
