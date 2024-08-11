import axios from 'axios';

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
    return axios({
        method:'POST',
        url:`${process.env.hostUrl||'http://ec2-13-60-43-139.eu-north-1.compute.amazonaws.com:8090'}/api/v1/auth/login`,
        data:authRequest
    })
}

export const fetchUserData=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://ec2-13-60-43-139.eu-north-1.compute.amazonaws.com:8090'}/api/user/panel`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        }
    })
}

export const logout=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://ec2-13-60-43-139.eu-north-1.compute.amazonaws.com:8090'}/api/v1/user/logout`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    }).then(() => localStorage.removeItem("USER_KEY"));
}