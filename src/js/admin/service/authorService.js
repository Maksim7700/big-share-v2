import axios from "axios";

class AuthorService {
    constructor() {
        this.hostUrl = "http://localhost:8083";
        // this.hostUrl = "http://ec2-13-60-43-139.eu-north-1.compute.amazonaws.com:8080";
    }

    getToken() {
        return localStorage.getItem('USER_KEY');
    }

    getAuthorById(id) {
        return axios({
            method: 'GET',
            url: `${this.hostUrl}/api/blogs/author/${id}`,
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
            },
        });
    }

    getAllAuthors() {
        return axios({
            method: 'GET',
            url: `${this.hostUrl}/api/authors`,
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
            },
        });
    }

    saveAuthor(form) {
        return axios({
            method: 'POST',
            url: `${this.hostUrl}/api/authors`,
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            data: form
        });
    }

    deleteAuthorById(id) {
        return axios({
            method: 'DELETE',
            url: `${this.hostUrl}/api/authors/${id}`,
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
            }
        });
    }
}

const authorService = new AuthorService();

export default authorService;
