import blogService from "../../service/blogService"
import { FAILED_BLOG, FAILED_BLOGS, RECEIVED_BLOG, RECEIVED_BLOGS, RECEIVED_BLOG_POST_CONTENTS, REQUESTED_BLOG, REQUESTED_BLOGS } from "../types";

export const getBlogsPaginated = (page) => {
    return (dispatch) => {
        return blogService.getBlogsPaginated(page)
        .then(res => {
            dispatch({
                type: RECEIVED_BLOGS,
                payload: res.data.content,
                totalPages: res.data.totalPages
            });
        })
        .catch(err => console.error('Error fetching paginated blogs:', err));
    };
};

export const getBlogsPaginatedView = (size) => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_BLOGS
        });
        return blogService.getBlogsPaginatedView(size)
        .then(res => {
            console.log('respose=', res)
            dispatch({
                type: RECEIVED_BLOGS,
                payload: res.data.content,
                totalElements: res.data.totalElements
            });
        })
        .catch(err => {
            console.error('Error fetching paginated blogs:', err)
            dispatch({type: FAILED_BLOGS})
        });
    };
};

export const getLatestBlogsView = (excludeId, size) => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_BLOGS
        });
        return blogService.getLatestBlogs(excludeId, size).then(res => {
            console.log("RESRES=RES=rES=", res)
            dispatch({
                type: RECEIVED_BLOGS,
                payload: res.data.content,
                totalElements: res.data.totalElements
            });
        })
        .catch(err => {
            console.error('Error fetching paginated blogs:', err)
            dispatch({type: FAILED_BLOGS})
        });
    }
}

export const getSingleBlogAction = (blogId) => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_BLOG
        });
        return blogService.getSingleBlogView(blogId)
        .then(res => {
            dispatch({
                type: RECEIVED_BLOG,
                payload: res.data
            });
        })
        .catch(err => {
            console.error('Error fetching paginated blogs:', err)
            dispatch({type: FAILED_BLOG})
        });
    };
};


export const handleStatusAction = (blogId, status) => {
    return (dispatch) => {
        return blogService.handleStatus(blogId, status).then(() => {
            dispatch(getBlogsPaginated(0));
        })
    }
}

export const handleDeleteAction = (blogId) => {
    return (dispatch) => {
        return blogService.delete(blogId).then(() => {
            dispatch(getBlogsPaginated(0));
        })
    }
}

export const handleDeleteBlogPostContentById = (blogPostContentId, blogId) => {
    return (dispatch) => {
        return blogService.deleteBlogPostContentById(blogPostContentId).then(() => {
            dispatch(getBlogPostContentsPaginated(0, blogId));
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
                type: RECEIVED_BLOG_POST_CONTENTS,
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