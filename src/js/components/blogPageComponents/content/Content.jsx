import ContentCard from "./ContentCard";
import { PENDING } from "../../../constants/RequestedStatus";
import './content.scss';
import Container from "../../../UI/Containter";

export const Content = ({ blogs = [], openMore, requestStatus, size, totalElements }) => {
    return (
        <>
            <div>
                <Container>
                    <div className="content">
                        Last <span>articles</span>
                    </div>

                    <div className="content-grid">
                        {requestStatus === PENDING ? (
                            Array(6).fill().map((_, index) => (
                                <ContentCard key={index} requestStatus={requestStatus} />
                            ))
                        ) : (
                            blogs.length > 0 ? (
                                blogs.map((blog, index) => (
                                    <ContentCard key={index} blog={blog} />
                                ))
                            ) : (
                                <p>No blogs available</p>
                            )
                        )}
                    </div>
                    {totalElements > size && 
                        <button onClick={() => {
                            openMore(); 
                        }} className="content-see-more">See more</button>
                    }
                </Container>
            </div>
        </>
    );
}

export default Content;
