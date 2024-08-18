import axios from 'axios';

class BlogService {
    constructor() {
        this.hostUrl = "http://localhost:8083";
        // this.hostUrl = "http://ec2-13-60-43-139.eu-north-1.compute.amazonaws.com:8080";
    }

    getToken() {
        return localStorage.getItem('USER_KEY');
    }

    getAll() {
        return axios({
            method: 'GET',
            url: `${this.hostUrl}/api/blogs`,
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
            },
        });
    }

    save(blog) {
        return axios({
            method: 'POST',
            url: `${this.hostUrl}/api/blogs`,
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            data: blog,
        });
    }
}

const blogService = new BlogService();

export default blogService;
