import Container from "../../../UI/Containter";
import ContentCard from "./ContentCard";
import './content.scss';

export const Content = () => {
    return (
        <>
            <div>
                <Container>
                    <div className="content">Last <span>articles</span></div>
                    <div className="content-grid">
                        <ContentCard/>
                        <ContentCard/>
                        <ContentCard/>
                        <ContentCard/>
                        <ContentCard/>
                        <ContentCard/>
                        <ContentCard/>
                        <ContentCard/>
                        <ContentCard/>
                    </div>
                    <button className="content-see-more">See more</button>
                </Container>
            </div>
        </>
    )
}

export default Content;