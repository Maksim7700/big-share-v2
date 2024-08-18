import AuthorTable from '../../tables/author/AuthorTable';
import BlogAuthorForm from '../../forms/authorForm/AuthorForm';
import './author.scss';

const BlogAuthor = () => {
    return (
        <div className="blog-post-admin">
            <BlogAuthorForm />
            <AuthorTable />
        </div>
    )
}

export default BlogAuthor;