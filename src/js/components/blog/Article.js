import Skeleton from 'react-loading-skeleton';
import '../../../css/blog/article.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import { useNavigate } from 'react-router-dom';

const Article = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className='flex-container-article'>
      <div className='flex-container-left'>
        <div className='article-title Gilroy-500'>
          {blog?.title ? blog.title : <Skeleton className='skeleton-title' />}
        </div>
        <div className='article-text Montserrat-400'>
          {blog?.content ? blog.content.substring(0, 200)+ "..." : <Skeleton className='skeleton-text' />}
        </div>
        <div onClick={() =>navigate('/blogs/' + blog.id)} className='article-read-me Montserrat-400'>
          <div className='read-me-text'>Read more</div>
          <img alt='right-arrow-read-more' src='./blog/arrow-right-read-more.svg' />
        </div>
      </div>
      <div className='flex-container-right'>
        <img height={233} width={427} src={`data:${blog.imageUrl.type};base64,${blog.imageUrl.data}`} alt='Avatar' />
      </div>
    </div>
  );
};

export default Article;
