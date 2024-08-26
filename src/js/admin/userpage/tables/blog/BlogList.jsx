import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './blogList.scss'; 
import { getBlogsPaginated, handleStatusAction } from '../../../redux/actions/BlogAction';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs.data);
  const totalPages = useSelector(state => state.blogs.totalPages);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getBlogsPaginated(currentPage));
  }, [dispatch, currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleStatus = (blogId, status) => {
    dispatch(handleStatusAction(blogId, status));
  }

  if (!blogs) return <div>Loading...</div>;

  return (
    <div className="blog-list-container">
      <h2>Blog List</h2>
      <table className="blog-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Posted</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.content.substring(0, 200)}...</td>
              <td>{blog.author.name}</td>
              <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
              <td>{new Date(blog.updatedAt).toLocaleDateString()}</td>
              <td>{blog.posted ? "Published" : "Unpublished"}{' - '}<button onClick={() => handleStatus(blog.id, !blog.posted)}>{blog.posted ? "Unpublish" : "Publish"}</button></td>
              <td><Link to={`/dashboard/blog/${blog.id}`}>Edit</Link></td>
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

export default BlogList;
