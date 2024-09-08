import { FAILED, PENDING, SUCCEEDED, UNINITIALIZED } from "../../../constants/RequestedStatus";
import { FAILED_AUTHORS, FAILED_BLOG, FAILED_BLOGS, RECEIVED_AUTHORS, RECEIVED_BLOG, RECEIVED_BLOG_POST_CONTENTS, RECEIVED_BLOGS, REQUESTED_AUTHORS, REQUESTED_BLOG, REQUESTED_BLOGS } from "../types";


const initialAuthors = {
  data: [],
  requestStatus: UNINITIALIZED
};


export const authors = (
    state = initialAuthors,
    action 
) => {
    switch (action.type) {
        case REQUESTED_AUTHORS:
          return {
            ...state,
            requestStatus: PENDING
          };
        case RECEIVED_AUTHORS:
            return {
              ...state,
              requestStatus: SUCCEEDED,
              data: action.payload || []
            };
        case FAILED_AUTHORS:
          return {
            ...state,
            requestStatus: FAILED_AUTHORS
          }
        default:
            return state;
    }
}

const blogsInitState = {
    data: [],
    totalElements: 0,
    requestStatus: UNINITIALIZED
  };
  
  export const blogs = (state = blogsInitState, action) => {
    switch (action.type) {
      case REQUESTED_BLOGS:
        return {
          ...state,
          requestStatus: PENDING
        }
      case RECEIVED_BLOGS:
        console.log("ACTION PAYLOAD = ", action.payload)
        return {
          ...state,
          data: action.payload,
          totalElements: action.totalElements,
          requestStatus: SUCCEEDED
        };
      case FAILED_BLOGS:
        return {
          ...state,
          requestStatus: FAILED
        }
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
      case RECEIVED_BLOG_POST_CONTENTS:
        return {
          ...state,
          data: action.payload,
          totalPages: action.totalPages,
        };
      default:
        return state;
    }
  };

  const blogInitState = {
    data: [],
    requestStatus: UNINITIALIZED
  };
  
  export const blog = (state = blogInitState, action) => {
    switch (action.type) {
      case REQUESTED_BLOG:
        return {
          ...state,
          requestStatus: PENDING
        }
      case RECEIVED_BLOG:
        return {
          ...state,
          data: action.payload,
          requestStatus: SUCCEEDED
        };
      case FAILED_BLOG:
        return {
          ...state,
          requestStatus: FAILED
        }
      default:
        return state;
    }
  };