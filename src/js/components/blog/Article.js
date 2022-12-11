import '../../../css/blog/article.css';
import '../../../css/hover.css';
const Article = () => {
  return (
    <div className='flex-container-article'>
        <div className='flex-container-left'>
          <div className='article-title Gilroy-500'>JavaScript</div>
          <div className='article-text Monserrat-400'>We estimate professional knowledge and expertise as the most valuable things a company should possess. Our blog is a platform for promoting and sharing those things to make the knowledge work for the goals and for the best purposes.</div>
          <div className='article-read-me Monserrat-400'>
            <div className='read-me-text'>Read more</div>
            <img alt='right-arrow-read-more' src='./blog/arrow-right-read-more.svg' />
          </div>
        </div>
        <div className='flex-container-right'>
          <img alt='logo-blog' src='./blog/blog1.svg'/>
        </div>
    </div>
  )
}

export default Article;
