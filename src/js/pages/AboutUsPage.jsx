import { useDispatch } from "react-redux";
import AboutUsPageHead from "../components/aboutUsPageComponents/head/AboutUsPageHead";
import Motivation from "../components/aboutUsPageComponents/motivation/Motivation";
import TheBest from "../components/aboutUsPageComponents/theBest/TheBest";
import Anketa from "../components/anketa/Anketa";
import BlogDetails from "../components/blogPageComponents/blogEmailDetails/BlogDetails";
import { getLatestBlogsView } from "../admin/redux/actions/BlogAction";
import { useEffect } from "react";
import Leaders from "../components/aboutUsPageComponents/leaders/Leaders";

const AboutUsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestBlogsView(0, 3));
        window.scrollTo(0, 0);
    }, [dispatch]);
    return (
        <>
            <AboutUsPageHead />
            <Motivation />
            <TheBest />
            <Leaders />
            <Anketa />
            <BlogDetails />
        </>
    )
}

export default AboutUsPage;