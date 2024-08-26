import { useParams } from 'react-router-dom';
import BlogPostContentForm from '../../forms/blogPostContentForm/BlogPostContentForm';
import BlogPostContentsList from './BlogPosContentsList';

const Blog = () => {
  const { id } = useParams();

  // Використовуйте id для завантаження конкретного блогу або виконання іншої логіки
  return (
    <div style={{width: '100%'}}>
      {id ? <h1>Blog ID: {id}</h1> : <h1>All Blogs</h1>}
      <BlogPostContentForm blogId={id}/>
      <BlogPostContentsList blogId={id}/>
    </div>
  );
};

export default Blog;
