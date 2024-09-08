import React, { useState } from 'react';
import './blogPostContentForm.scss';
import { saveBlogPostContentAction } from '../../../redux/actions/BlogAction';
import { useDispatch } from 'react-redux';

const BlogPostContentForm = ({blogId}) => {
    const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('title', formData.title);
    formPayload.append('text', formData.text);
    if (formData.image !== null) {
      formPayload.append('image', formData.image);
    }

    dispatch(saveBlogPostContentAction(blogId, formPayload));

    setFormData({
        title: '',
        text: '',
        image: null,
      });
  };

  return (
    <form className="blogpost-content-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Enter text"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogPostContentForm;
