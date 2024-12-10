import Skeleton from "react-loading-skeleton";
import BackgroundDefault from "../../../UI/BackgroundDefault";
import Container from "../../../UI/Containter";
import BlogAuthor from "../blogAuthor/BlogAuthor";
import './blogMain.scss';
import { useNavigate } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';

export const BlogMain = ({ blog }) => {
    const navigate = useNavigate();
    if (!blog) {
        return (
            <BackgroundDefault>
                <Container>
                    <div className="blog-page-main">
                        <div className="blog-page-main-info">
                            <div className="blog-page-main-title">
                                <Skeleton />
                            </div>
                            <div className="blog-page-main-description">
                                <Skeleton />
                            </div>
                            <div><hr/></div>
                            <div className="blog-page-main-blog-author">
                                <BlogAuthor />
                            </div>
                        </div>
                        <div className="blog-page-image">
                            <Skeleton className="blog-page-image-skeleton" />
                        </div>
                    </div>
                </Container>
            </BackgroundDefault>
        );
    }

    return (
        <BackgroundDefault>
            <Container>
                <div onClick={() => navigate("/blogs/" + blog.id)}  className="blog-page-main">
                    <div className="blog-page-main-info">
                        <div className="blog-page-main-title">
                            {blog.title}
                        </div>
                        <div className="blog-page-main-description">
                            {blog.content.substring(0, 100)}{'...'}
                        </div>
                        <div><hr/></div>
                        <div className="blog-page-main-blog-author">
                            <BlogAuthor style={{color: 'white'}} author={blog.author} createdAt={blog.createdAt} />
                        </div>
                    </div>
                    <div className="blog-page-image">
                        <img
                            id='blog-photo'
                            src={`${blog.imageUrl !== null ? `data:${blog.imageUrl.type};base64,${blog.imageUrl.data}` : "/content-image.svg"}`}
                            alt='Content'
                        />
                    </div>
                </div>
            </Container>
        </BackgroundDefault>
    );
}

export default BlogMain;
