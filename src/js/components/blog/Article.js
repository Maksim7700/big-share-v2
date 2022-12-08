import '../../../css/blog/article.css';

const Article = () => {
  return (
    <div className='flex-container-article'>
        <div className='flex-container-left'>
          <div className='article-title Gilroy-500'>JavaScript</div>
          <div className='article-text Monserrat-400'>We estimate professional knowledge and expertise as the most valuable things a company should possess. Our blog is a platform for promoting and sharing those things to make the knowledge work for the goals and for the best purposes.</div>
          <div className='article-read-me Monserrat-400'>
            <div>Read more</div>
            <img alt='right-arrow-read-more' />
          </div>
        </div>
        <div className='flex-container-right'>
          <img alt='logo-blog' />
        </div>
    </div>
  )
}

export default Article;
