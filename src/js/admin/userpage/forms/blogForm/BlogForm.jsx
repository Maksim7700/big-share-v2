import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveBlogAction } from '../../../redux/actions/BlogAction';
import { getAuthorsOptions } from '../../../redux/actions/AuthorActions';
import './blogForm.scss';

const BlogForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [image, setImage] = useState(null);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthorsOptions()
            .then(response => setAuthors(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const blogRequest = {
            title,
            content,
            authorId,
            image,
        };
    
        dispatch(saveBlogAction(blogRequest));
    
        setTitle('');
        setContent('');
        setAuthorId('');
        setImage(null);
    };    

    return (
        <div className='blog-form'>
            <h2>Create a Blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="5"
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <select
                        value={authorId}
                        onChange={(e) => setAuthorId(e.target.value)}
                        required
                    >
                        <option value="">Select an author</option>
                        {authors.map((author) => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Upload Image:</label>
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        accept="image/*"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BlogForm;
