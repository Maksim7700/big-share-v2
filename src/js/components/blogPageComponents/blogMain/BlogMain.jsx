import BackgroundDefault from "../../../UI/BackgroundDefault";
import Container from "../../../UI/Containter";
import BlogAuthor from "../blogAuthor/BlogAuthor";
import './blogMain.scss';

export const BlogMain = () => {
    return (
        <>
            <BackgroundDefault>
            <Container>
                <div className="portfolio-page-main">
                    <div className="portfolio-page-main-info">
                        <div className="portfolio-page-main-title"><span>JavaScript</span> our everything</div>
                        <div className="portfolio-page-main-description">Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered plugin.</div>
                        <div><hr/></div>
                        <div className="portfoli-page-main-blog-author"><BlogAuthor /></div>
                    </div>
                    <div><img id='blog-photo' src="/blogPage/blog-photo.jpg" alt='Blog'/></div>
                </div>
            </Container>
            </BackgroundDefault>
        </>
    );
}

export default BlogMain;