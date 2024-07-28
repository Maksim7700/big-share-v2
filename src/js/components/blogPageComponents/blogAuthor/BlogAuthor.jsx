import './blogAuthor.scss';

const BlogAuthor = () => {
    return (
        <>
            <div className='blog-author-card'>
                <img src='/Avatar.svg' alt='Avatar' />
                <div className='blog-author-info'>
                    <div className='blog-author-name'>Anna Rosé</div>
                    <div className='blog-author-posted'>Posted just now</div>
                </div>
            </div>  
        </>
    );
}

export default BlogAuthor;