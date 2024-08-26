import { GET_AUTHORS, GET_BLOGS } from "../types";


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

export const blogs = (
    state = initialState,
    action 
) => {
    switch (action.type) {
        case GET_BLOGS:
            return action.payload || [];
        default:
            return state;
    }
}