import React, { useState } from 'react';
import './authorForm.scss';
import { saveAuthorAction } from '../../../redux/actions/AuthorActions';
import { useDispatch } from 'react-redux';

const BlogAuthorForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [image, setImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogAuthorRequest = { name, image };
    dispatch(saveAuthorAction(blogAuthorRequest));
    setName('');
    setImg(null);
  };

  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <form className="blog-author-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="img">Profile Photo:</label>
        <input
          type="file"
          id="img"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogAuthorForm;
