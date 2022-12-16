import '../../../css/client/comment.css';
import '../../../css/hover.css';

const Comment = () => {
    return (
        <div className="flex-container-comment em-02">
            <div className='client-title Gilroy-700'>We work with the <span>best</span></div>
            <div className='client-text Montserrat-400'>We bring real world solutions to each client’s problem through a deep understanding of their market, product, and vision.</div>
            <div className='flex-container-comment comment'>
                <div>
                    <div className='client-data em-02'>
                        <div className='client-image'><img alt='client'/></div>
                        <div className='client-meta-data Montserrat-500'>
                            <div className='client-name'>Alexandru Szentgyorgyi</div>
                            <div className='client-company'>Byggito</div>
                        </div>
                    </div>
                </div>
                <div className='client-raiting'>
                    <img alt='star'/>
                    <img alt='star'/>
                    <img alt='star'/>
                    <img alt='star'/>
                    <img alt='star'/>
                    </div>
                <div className='client-comment Montserrat-400'><i>"This guy has an amazing imagination and ability to come up with creative ideas. I just had to ask him and he would come up with things I would never think of. I can be a bit annoying because I am a perfectionist but everytime I asked him to change something or come up with something else he would do it directly. It was ..."</i></div>
                <div className='client-move'>
                    <div className='client-previous'><img alt='arrow-left' src='./client/client-arrow-left.svg'/></div>
                    <div className='client-next'><img alt='arrow-left' src='./client/client-arrow-right.svg'/></div>
                </div>
            </div>
        </div>
    )
}

export default Comment;
