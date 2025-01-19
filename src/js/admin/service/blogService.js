import axios from 'axios';

class BlogService {
    constructor() {
        // this.hostUrl = "http://localhost:8080";
        this.hostUrl = "https://big-share-24e5dd9982db.herokuapp.com";
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
        console.log(formData.image)
        const requestPayload = new FormData();
        requestPayload.append('title', formData.title);
        requestPayload.append('content', formData.content);
        requestPayload.append('file', formData.image);  // Переконайтесь, що image є файлом
        requestPayload.append('authorId', formData.authorId);

        return axios.post(`${this.hostUrl}/api/blogs`, requestPayload, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${this.getToken()}`, // Замініть на ваш метод отримання токену
            },
        });
    };
    
    saveBlogPostContent = (blogId, formData) => {
        const requestPayload = new FormData();
        requestPayload.append('title', formData.title);
        requestPayload.append('text', formData.text);
        
        if (formData.image) {
            requestPayload.append('image', formData.image); // Завантаження файлу
        }
        
        return axios.post(`${this.hostUrl}/api/blogs/${blogId}`, requestPayload, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${this.getToken()}`, // Ваш метод отримання токену
            },
        });
    };
    
}

const blogService = new BlogService();

export default blogService;
