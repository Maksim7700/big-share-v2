import React, { useCallback, useEffect, useState } from "react";
import BlogMain from "../components/blogPageComponents/blogMain/BlogMain";
import Content from "../components/blogPageComponents/content/Content";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsPaginatedView } from "../admin/redux/actions/BlogAction";

export const BlogPageMenu = () => {
    const dispatch = useDispatch();
    const [size, setSize] = useState(7);

    const blogs = useSelector(state => state.blogs);
    const firstBlog = blogs.data && blogs.data.length > 0 ? blogs.data[0] : null;
    const restBlogs = blogs.data && blogs.data.length > 1 ? blogs.data.slice(1) : [];
    
    useEffect(() => {
        dispatch(getBlogsPaginatedView(size));
    }, [dispatch, size]);

    const openMore = useCallback(() => {
        setSize(prevSize => prevSize + 6);
    }, []);

    return (
        <>
            <BlogMain blog={firstBlog} requestStatus={blogs.requestStatus} />
            <Content 
                openMore={openMore} 
                setSize={setSize} 
                blogs={restBlogs} 
                requestStatus={blogs.requestStatus} 
                size={size} 
                totalElements={blogs.totalElements} 
            />
        </>
    );
}

export default BlogPageMenu;

