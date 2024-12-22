import axios from "axios";

class AuthorService {
    constructor() {
        // this.hostUrl = "http://localhost:8083";
        this.hostUrl = "https://mertioyr0d.execute-api.eu-north-1.amazonaws.com/prod";
    }


    saveAuthor = (formData) => {
        const file = formData.image;
    
        if (!file) {
            console.error("No file selected!");
            return;
        }
    
        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result.split(',')[1]; // Отримуємо Base64 без префіксу
            const requestPayload = {
                name: formData.name,
                image: base64Image,
                type: formData.image.type,
                fileName: formData.image.name
            };
    
            return axios.post(`${this.hostUrl}/api/authors`, requestPayload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getToken()}`, // Замініть на ваш метод отримання токену
                },
            });
        };
    
        // Читання файлу як Data URL (Base64)
        reader.readAsDataURL(file);
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
