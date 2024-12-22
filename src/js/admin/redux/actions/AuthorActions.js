import { RECEIVED_AUTHORS } from "../types";
import authorService from "../../service/authorService";

export const getAuthors = (authors) => ({
    type: RECEIVED_AUTHORS,
    payload: authors
});


export const getAuthorsAction = () => {
    return (dispatch) => {
        authorService.getAllAuthors()
            .then(res => {
                dispatch(getAuthors(res.data));
            })
            .catch(err => {
                console.error('Error fetching authors:', err);
            });
    }
}

export const getAuthorsOptions = () => {
    return authorService.getAllAuthors(res => res.data);
}

export const deleteAuthorById = (id) => {
    return (dispatch) => {
        authorService.deleteAuthorById(id).then(() => {
            dispatch(getAuthorsAction());
        });
    }
}

export const saveAuthorAction = (author) => {
    return async(dispatch) => {
        try {
            await authorService.saveAuthor(author);
        } catch (error) {
            console.error("Error saving author:", error);
        }
    }
}
