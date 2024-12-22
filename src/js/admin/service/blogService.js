import axios from 'axios';

class BlogService {
    constructor() {
        // this.hostUrl = "http://localhost:8083";
        this.hostUrl = "https://mertioyr0d.execute-api.eu-north-1.amazonaws.com/prod";
    }

    getToken() {
        return localStorage.getItem('USER_KEY');
    }

    getBlogsPaginated(page) {
        return axios.get(`${this.hostUrl}/api/blogs`, {
            params: { page, size: 10 },
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
            }
        })
    }

    getBlogsPaginatedView(size) {
        return axios.get(`${this.hostUrl}/api/view/blogs`, {
            params: { size },
        })
    }

    getLatestBlogs(excludeId, size) {
        return axios.get(`${this.hostUrl}/api/view/blogs/latest`, {
            params: { excludeId, size },
        })
    }

    getSingleBlogView(blogId) {
        return axios.get(`${this.hostUrl}/api/view/blogs/${blogId}`)
    }

    getBlogPostContentsPaginated(page, blogId) {
        return axios.get(`${this.hostUrl}/api/blogs/${blogId}`, {
            params: { page, size: 10 },
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,   
            }
        })
    }

    handleStatus(blogId, status) {
        return axios.put(`${this.hostUrl}/api/blogs`, null, {
            params: { blogId, status },
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
            }
        });
    }

    delete(blogId) {
        return axios.delete(`${this.hostUrl}/api/blogs/${blogId}`, {
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
            }
        });
    }

    deleteBlogPostContentById(blogPostContentId) {
        return axios.delete(`${this.hostUrl}/api/blogs/blog-post-content/${blogPostContentId}`, {
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
            }
        });
    }
    

    save = (formData) => {
        const file = formData.image;
    
        if (!file) {
            console.error("No file selected!");
            return;
        }
    
        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result.split(',')[1]; // Отримуємо Base64 без префіксу
    
            const requestPayload = {
                title: formData.title,
                content: formData.content,
                image: base64Image,
                authorId: formData.authorId,
                fileName: formData.image.name,
                type: formData.image.type,
            };
    
            return axios.post(`${this.hostUrl}/api/blogs`, requestPayload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getToken()}`, // Замініть на ваш метод отримання токену
                },
            });
        };
    
        reader.readAsDataURL(file);
    };
    

    saveBlogPostContent = (blogId, formData) => {
        const file = formData.image;
    
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64Image = reader.result.split(',')[1]; // Отримуємо Base64 без префіксу
        
                const requestPayload = {
                    title: formData.title,
                    text: formData.text,
                    image: base64Image,
                    fileName: formData.image.name,
                    type: formData.image.type,
                };
        
                // Відправка POST запиту
                return axios.post(`${this.hostUrl}/api/blogs/${blogId}`, requestPayload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.getToken()}`, // Замініть на ваш метод отримання токену
                    },
                });
            };
        reader.readAsDataURL(file);
        } else {
            const requestPayload = {
                title: formData.title,
                text: formData.text,
            };
    
            // Відправка POST запиту
            return axios.post(`${this.hostUrl}/api/blogs/${blogId}`, requestPayload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getToken()}`, // Замініть на ваш метод отримання токену
                },
            });
        }
    
        // Читання файлу як Data URL (Base64)
    };
    
}

const blogService = new BlogService();

export default blogService;
