import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './blogList.scss'; 
import { getBlogPostContentsPaginated } from '../../../redux/actions/BlogAction';

const BlogPostContentsList = ({blogId}) => {
  const dispatch = useDispatch();
  const blogPostContents = useSelector(state => state.blogPostContents.data);
  const totalPages = useSelector(state => state.blogPostContents.totalPages);

  console.log(blogPostContents);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getBlogPostContentsPaginated(currentPage, blogId));
  }, [dispatch, currentPage, blogId]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };


  if (!blogPostContents) return <div>Loading...</div>;

  return (
    <div className="blog-list-container">
      <h2>Blog List</h2>
      <table className="blog-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Text</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {blogPostContents.map(blog => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.text}</td>
              <td>
              <img
                                src={`data:${blog.image.type};base64,${blog.image.data}`}
                                alt={blog.title}
                            />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default BlogPostContentsList;
