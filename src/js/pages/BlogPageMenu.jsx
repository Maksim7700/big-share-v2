import React, { useCallback, useEffect, useState, useMemo } from "react";
import PropTypes from 'prop-types';
import BlogMain from "../components/blogPageComponents/blogMain/BlogMain";
import Content from "../components/blogPageComponents/content/Content";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsPaginatedView } from "../admin/redux/actions/BlogAction";

const INITIAL_PAGE_SIZE = 7;
const LOAD_MORE_INCREMENT = 6;

export const BlogPageMenu = () => {
    const dispatch = useDispatch();
    const [size, setSize] = useState(INITIAL_PAGE_SIZE);

    const { data: blogs = [], requestStatus, totalElements, error } = useSelector(state => state.blogs);

    const { firstBlog, restBlogs } = useMemo(() => ({
        firstBlog: blogs.length > 0 ? blogs[0] : null,
        restBlogs: blogs.length > 1 ? blogs.slice(1) : []
    }), [blogs]);

    useEffect(() => {
        try {
            dispatch(getBlogsPaginatedView(size));
        } catch (error) {
            console.error('Failed to fetch blogs:', error);
        }
    }, [dispatch, size]);

    const handleLoadMore = useCallback(() => {
        setSize(prevSize => prevSize + LOAD_MORE_INCREMENT);
    }, []);

    const handleReset = useCallback(() => {
        setSize(INITIAL_PAGE_SIZE);
    }, []);

    if (error) {
        return <div>Error loading blogs: {error.message}</div>;
    }

    return (
        <>
            <BlogMain 
                blog={firstBlog} 
                requestStatus={requestStatus} 
            />
            <Content 
                openMore={handleLoadMore}
                onReset={handleReset}
                setSize={setSize}
                blogs={restBlogs}
                requestStatus={requestStatus}
                size={size}
                totalElements={totalElements}
            />
        </>
    );
};

BlogPageMenu.propTypes = {
    // Add any props if needed in the future
};

export default React.memo(BlogPageMenu);

