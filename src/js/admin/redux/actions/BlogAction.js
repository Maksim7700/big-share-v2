import blogService from "../../service/blogService"
import { GET_BLOGS, GET_BLOG_POST_CONTENT } from "../types";

export const getBlogsPaginated = (page) => {
    return (dispatch) => {
        return blogService.getBlogsPaginated(page)
        .then(res => {
            dispatch({
                type: GET_BLOGS,
                payload: res.data.content,
                totalPages: res.data.totalPages
            });
        })
        .catch(err => console.error('Error fetching paginated blogs:', err));
    };
};

export const handleStatusAction = (blogId, status) => {
    return (dispatch) => {
        return blogService.handleStatus(blogId, status).then(() => {
            dispatch(getBlogsPaginated(0));
        })
    }
}

export const saveBlogAction = (blog) => {
    return (dispatch) => {
        return blogService.save(blog).then(() => {
        dispatch(getBlogsPaginated(0));
    });
    }
}

export const getBlogPostContentsPaginated = (page, blogId) => {
    return (dispatch) => {
        return blogService.getBlogPostContentsPaginated(page, blogId)
        .then(res => {
            dispatch({
                type: GET_BLOG_POST_CONTENT,
                payload: res.data.content,
                totalPages: res.data.totalPages
            });
        })
        .catch(err => console.error('Error fetching paginated blogs:', err));
    };
};

export const saveBlogPostContentAction = (blogId, blogPostContent) => {
    return (dispatch) => {
        return blogService.saveBlogPostContent(blogId, blogPostContent).then(() => {
            dispatch(getBlogPostContentsPaginated(0, blogId));
        })
    }
}