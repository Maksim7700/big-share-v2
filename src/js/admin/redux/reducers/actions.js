import { GET_AUTHORS, GET_BLOGS, GET_BLOG_POST_CONTENT } from "../types";


const initialState = [];


export const authors = (
    state = initialState,
    action 
) => {
    switch (action.type) {
        case GET_AUTHORS:
            return action.payload || [];
        default:
            return state;
    }
}

const blogsInitState = {
    data: [],
    totalPages: 0,
  };
  
  export const blogs = (state = blogsInitState, action) => {
    switch (action.type) {
      case GET_BLOGS:
        return {
          ...state,
          data: action.payload,
          totalPages: action.totalPages,
        };
      default:
        return state;
    }
  };

  const blogPostContentsInitState = {
    data: [],
    totalPages: 0,
  };
  
  export const blogPostContents = (state = blogPostContentsInitState, action) => {
    switch (action.type) {
      case GET_BLOG_POST_CONTENT:
        return {
          ...state,
          data: action.payload,
          totalPages: action.totalPages,
        };
      default:
        return state;
    }
  };