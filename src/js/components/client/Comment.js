import { useEffect, useState } from 'react';
import '../../../css/client/comment.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';



const Comment = () => {

        const [activeFeedback, setActiveFeedback] = useState(0);

        useEffect(() => {
        const feedbackContainer = document.querySelector('.test-animation');

        // add animation class on feedback change
        feedbackContainer.classList.add('animated-feedback');
        // remove animation class after 0.5s
        setTimeout(() => {
            feedbackContainer.classList.remove('animated-feedback');

        }, 700);
        }, [activeFeedback]);



    

    const [count, setCount] = useState(1);


    const feedbacks = [
        {
            name: "Alexandru Szentgyorgyi",
            company: "Byggito",
            img: "./client/client1.svg",
            desc: "“This guy has an amazing imagination and ability to come up with creative ideas. I just had to ask him and he would come up with things I would never think of. I can be a bit annoying because I am a perfectionist but everytime I asked him to change something or come up with something else he would do it directly. It was ...“"
        },
        {
            name: "Ruchi Goenka",
            company: "Desire Trip",
            img: "./client/client2.svg",
            desc: "“Andrii developed the best UI/UX that came along perfectly. We have asked for multiple revisions as we were looking for a suitable option for a particular section and Andrii helped us with the same without any hassle. He not only made these versions many times but at the same time, his creative feedback was the reason f...“"
        },
        {
            name: "Ishwar Jha",
            company: "Wistec Assessments",
            img: "./client/client3.svg",
            desc: "“Andril is a very proactive designer. He is supportive, understands the requirement in detail, and approaches the job with lots of flexibility. I placed the order to him even though he didn't have any earning here on upwork, but I think I won't have taken a better choice than assigning work to Andril. Thank you Andril for being a...”"
        },
        {
            name: "Andre Bush",
            company: "WolfPad",
            img: "./client/client4.svg",
            desc: "“Andrii understood our requirements well and came out with an awesome output. He used very good colour combination and the flow of UI/UX was just perfect with the right images. Thanks a ton and looking forward to work for more pages of the website. Thanks!”"
        },
        {
            name: "Med Supply",
            company: "Pedal 2 Earn",
            img: "./client/client5.svg",
            desc: "”Very happy working with Andrii again. I knew that he will do the illustration job I asked him to do very well. But this time, he even went out of his way to try doing extra for this job which was a short animation in my case. If you need a person who not only would do great work for you but go the extra mile to make sure it is deliv...”"
        }
    ];

    const [feedback, setFeedback] = useState([{
        name: "Alexandru Szentgyorgyi",
            company: "Byggito",
            img: "./client/client1.svg",
            desc: "“This guy has an amazing imagination and ability to come up with creative ideas. I just had to ask him and he would come up with things I would never think of. I can be a bit annoying because I am a perfectionist but everytime I asked him to change something or come up with something else he would do it directly. It was ...“"
    }]);


    const nextFeedback = (side) => {
        const feedbackContainer = document.querySelector('.test-animation');

        // add animation class on feedback change
        feedbackContainer.classList.add('animated-feedback');

        if (side) {
            if (count < 4) {
                setCount(count + 1);
            } else {
                setCount(0);
            }
        } else {
            if (count > 0) {
                setCount(count - 1);
            } else {
                setCount(4);
            }
        }
        setFeedback([feedbacks[count]]);
        setActiveFeedback(count);
    }

    return (
        <div className="flex-container-comment em-02">
  <div className='client-title Gilroy-700'>We work with the <span>best</span></div>
  <div className='client-text Montserrat-400'>We bring real world solutions to each client's problem through a deep understanding of their market, product, and vision.</div>
  <div className='test-animation flex-container-comment comment'  >
    {feedback.map((feedback, index) => (
      <div key={index}>
        <div >
          <div className='client-data em-02'>
            <div className='client-image'><img alt='client' src={`${feedback.img}`} /></div>
            <div className='client-meta-data Montserrat-500'>
              <div className='client-name'>{feedback.name}</div>
              <div className='client-company'>{feedback.company}</div>
            </div>
          </div>
        </div>
        <div className='client-raiting'>
          <img alt='star' />
          <img alt='star' />
          <img alt='star' />
          <img alt='star' />
          <img alt='star' />
        </div>
        <div className='client-comment Montserrat-400'><i>{feedback.desc}</i></div>
      </div>
    ))}

    <div className='client-move'>
      <div className='client-previous' onClick={() => nextFeedback(false)}><img alt='arrow-left' src='./client/client-arrow-left.svg'/></div>
      <div className='client-next' onClick={() => nextFeedback(true)}><img alt='arrow-left' src='./client/client-arrow-right.svg'/></div>
    </div>
  </div>
</div>

    )
}

export default Comment;
