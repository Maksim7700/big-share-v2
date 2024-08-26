import blogService from "../../service/blogService"
import { GET_BLOGS } from "../types";

export const getBLogs = (blogs) => ({
    type: GET_BLOGS,
    payload: blogs
});

export const saveBlogAction = (blog) => {
    return (dispatch) => {
        console.log(blog);
        blogService.save(blog);
    }
}