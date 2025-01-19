import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLatestBlogsView, getSingleBlogAction } from "../../../admin/redux/actions/BlogAction";
import Container from "../../../UI/Containter";
import './blogContent.scss';
import BlogAuthor from "../blogAuthor/BlogAuthor";
import CustomContainer from "../../../UI/CustomContainer";
import Skeleton from "react-loading-skeleton";
import BlogDetails from "../blogEmailDetails/BlogDetails";

export const BlogContent = () => {
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blog.data);
    const requestStatus = useSelector((state) => state.blog.requestStatus);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSingleBlogAction(id));
        dispatch(getLatestBlogsView(id, 3));
        window.scrollTo(0, 0);
    }, [dispatch, id]);


    if (requestStatus === 'PENDING') {
        return (
            <Container>
                <div className="blog-content">
                    <h1 className="blog-content-title">
                        <Skeleton width={200} height={40} />
                    </h1>
                    <div className="blog-content-text">
                        <Skeleton count={3} />
                    </div>
                    <div className="blog-content-author">
                        <BlogAuthor/>
                    </div>
                    <div className="blog-content-main-image">
                        <Skeleton width={705} height={370} />
                    </div>
                </div>
            </Container>
        );
    }

    if (!blog || !blog.title) {
        return <Container>Loading...</Container>;
    }

    const [firstWord, ...rest] = blog.title.split(' ');
    const url = blog.imageUrl;
    const restOfTitle = rest.join(' ');

    return (
        <>
        <Container>
            <div className="blog-content">
                <h1 className="blog-content-title">
                    <span>{firstWord}</span>{' '}{restOfTitle}
                </h1>
                <div className="blog-content-text">
                    {blog.content}
                </div>
                <div className="blog-content-author">
                    <BlogAuthor author={blog.author} createdAt={blog.createdAt}/>
                </div>
                <div className="blog-content-main-image">
                    <img src={`${url}`} alt={"Blog"}/>
                </div>
            </div>
            <CustomContainer>
                <div className="blog-post-content-block">
                    {blog.blogPostContentDTOList && blog.blogPostContentDTOList.map((blogPostContent, index) => {
                        const url = blogPostContent.imageUrl;
                        return (
                            <div key={index} className="blog-post-content">
                                <h2 className="blog-post-content-title">{blogPostContent.title}</h2>
                                <div className="blog-post-content-text">
                                    {blogPostContent.text.split('\n').map((line, index) => (
                                        <span key={index}>{line}<br /></span>
                                    ))}
                                </div>
                                <div className="blog-post-content-image">
                                    {url && (
                                        <img src={`${blogPostContent.imageUrl}`} alt="Blog post" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CustomContainer>

        </Container>
        <BlogDetails />
        </>
    );
}

export default BlogContent;
