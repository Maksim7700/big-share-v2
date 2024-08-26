import BlogForm from "../../forms/blogForm/BlogForm"
import BlogList from "../../tables/blog/BlogList";

export const BlogPage = () => {
    return (<>
    <div style={{width: '100%'}}>
        <BlogForm />
        <BlogList />
    </div>
    </>
    )
}

export default BlogPage;