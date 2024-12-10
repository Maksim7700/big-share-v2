import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './blogAuthor.scss';

const BlogAuthor = ({style, author, createdAt }) => {
    if (!author || !author.image) {
        return (
            <div className='blog-author-card'>
                <Skeleton circle={true} height={50} width={50} />
                <div className='blog-author-info'>
                    <Skeleton width={150} />
                    <Skeleton width={100} />
                </div>
            </div>
        );
    }

    const formattedDate = createdAt ? new Date(createdAt).toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : 'Unknown date';

    return (
        <>
            <div className='blog-author-card'>
                    <img src={`data:${author.image.type};base64,${author.image.data}`} alt='Avatar' />
                <div className='blog-author-info'>
                    <div style={style} className='blog-author-name'>
                        {author.name}
                    </div>
                    <div className='blog-author-posted'>
                        {formattedDate}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogAuthor;
