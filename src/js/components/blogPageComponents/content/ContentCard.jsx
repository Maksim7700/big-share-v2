import Skeleton from 'react-loading-skeleton';
import BlogAuthor from '../blogAuthor/BlogAuthor';
import 'react-loading-skeleton/dist/skeleton.css';
import './contentCard.scss';
import { PENDING } from '../../../constants/RequestedStatus';
import { useNavigate } from 'react-router-dom';

export const ContentCard = ({blog, requestStatus}) => {
    const navigate = useNavigate();

    if (requestStatus === PENDING) {
        return (
            <div className='content-card'>
                <div className='content-card-image'><Skeleton className='content-card-image-skeleton'/></div>
                <div className='content-card-title'><Skeleton/></div>
                <div className='content-card-description'><Skeleton/></div>
                <div className='content-card-author'><BlogAuthor/></div>
            </div>
        )
    }
    
    return (
        <>
            <div className='content-card' onClick={() => {navigate("/blogs/" + blog.id); }}>
                <div className='content-card-image'><img src={`${blog.imageUrl !== null ? `data:${blog.imageUrl.type};base64,${blog.imageUrl.data}` : "/content-image.svg"}  `} alt='Content' /></div>
                <div className='content-card-title'>{blog.title.substring(0, 30)}</div>
                <div className='content-card-description'>{blog.content.substring(0, 60)}{'...'}</div>
                <div className='content-card-author'><BlogAuthor author={blog.author} createdAt={blog.createdAt}/></div>
            </div>
        </>
    )

}

export default ContentCard;