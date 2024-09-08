import axios from 'axios';

class BlogService {
    constructor() {
        this.hostUrl = "http://localhost:8083";
        // this.hostUrl = "http://ec2-13-60-43-139.eu-north-1.compute.amazonaws.com:8080";
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

    saveBlogPostContent(blogId, blogPostContent) {
        return axios({
            method: 'POST',
            url: `${this.hostUrl}/api/blogs/${blogId}`,
            headers: {
                'Authorization': `Bearer ${this.getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            data: blogPostContent,
        });
    }
}

const blogService = new BlogService();

export default blogService;
