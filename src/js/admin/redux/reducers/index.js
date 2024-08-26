import { combineReducers } from "redux";

import { auth }from './auth';
import { authors, blogs, blogPostContents } from "./actions";

export default combineReducers({
    auth, authors, blogs, blogPostContents
})