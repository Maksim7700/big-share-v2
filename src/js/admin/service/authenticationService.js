import axios from 'axios';

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

// export const hostUrl = "http://localhost:8080";
export const hostUrl = "https://big-share-24e5dd9982db.herokuapp.com";

export const userLogin=(authRequest)=>{
    return axios({
        method:'POST',
        url:`${hostUrl}/api/v1/auth/login`,
        data:authRequest
    })
}

export const logout=()=>{
    return axios({
        method:'GET',
        url:`${hostUrl}/api/v1/user/logout`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    }).then(() => localStorage.removeItem("USER_KEY"));
}