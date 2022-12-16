import '../../../css/blog/blog.css';
import '../../../css/hover.css';

import Container from '../../UI/Containter';
import Article from './Article';

const Blog = () => {
  return (
    <div className='blog em-02'>
      <Container>
        <div className='flex-container-blog'>
          <div className='blog-title Gilroy-700'><span>Discover</span> insights and trends</div>
          <div className='blog-text Montserrat-400'>We estimate professional knowledge and expertise as the most valuable things a company should possess. Our blog is a platform for promoting and sharing those things to make the knowledge work for the goals and for the best purposes.</div>
          <div className='blog-article'>
            <Article />
            <Article />
            <Article />
          </div>
          <div className='blog-view Gilroy-500'>View all blog</div>
        </div>
      </Container>
    </div>
  )
}


export default Blog;
