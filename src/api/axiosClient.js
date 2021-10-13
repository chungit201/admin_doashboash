import axios from 'axios';
const tokens = JSON.parse(localStorage.getItem('tokens'))
const {token} = tokens
const beaerToken =  token.access.token;
export const axiosClient = axios.create({
    
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': "application/json",
        'Authorization': 'Bearer ' + beaerToken
    }
});