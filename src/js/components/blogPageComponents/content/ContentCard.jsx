import BlogAuthor from '../blogAuthor/BlogAuthor';
import './contentCard.scss';

export const ContentCard = () => {
    return (
        <>
            <div className='content-card'>
                <div className='content-card-image'><img src='/content-image.svg' alt='Content' /></div>
                <div className='content-card-title'>JavaScript our everything</div>
                <div className='content-card-description'>Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with...</div>
                <div className='content-card-author'><BlogAuthor /></div>
            </div>
        </>
    )

}

export default ContentCard;