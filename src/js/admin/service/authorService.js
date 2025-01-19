import axios from "axios";

class AuthorService {
    constructor() {
        // this.hostUrl = "http://localhost:8080";
        this.hostUrl = "https://big-share-24e5dd9982db.herokuapp.com";
    }


    saveAuthor = (formData) => {
        const file = formData.image;
    
        if (!file) {
            console.error("No file selected!");
            return;
        }
    
        // Формуємо FormData
        const payload = new FormData();
        payload.append("authorName", formData.name); // Додаємо ім'я
        payload.append("file", file); // Додаємо файл
    
        // Відправляємо дані
        return axios.post(`${this.hostUrl}/api/authors`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${this.getToken()}`, // Замініть на ваш метод отримання токену
            },
        });
    };
    

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
