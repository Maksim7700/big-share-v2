import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAuthorById, getAuthorsAction } from '../../../redux/actions/AuthorActions';
import './authorTable.scss';

const AuthorTable = () => {
    const dispatch = useDispatch();
    const authors = useSelector((state) => state.authors);

    useEffect(() => {
        console.log('Fetching authors...');
        dispatch(getAuthorsAction());
    }, [dispatch]);

    if (!authors) return <div>Loading...</div>;

    const handleEdit = (authorId) => {
        console.log(`Edit author with ID: ${authorId}`);
    };

    const handleDelete = (authorId) => {
        console.log(`Delete author with ID: ${authorId}`);
        dispatch(deleteAuthorById(authorId));
    };

    return (
        <table className={'author-table'}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author) => (
                    <tr key={author.id}>
                        <td>{author.name}</td>
                        <td>
                            <img
                                src={`data:${author.image.type};base64,${author.image.data}`}
                                alt={author.name}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => handleEdit(author.id)}
                                className={'edit-button'}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(author.id)}
                                className={'delete-button'}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AuthorTable;
