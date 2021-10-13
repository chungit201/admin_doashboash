
import { axiosClient } from "./axiosClient";

const AuthAPI = {
    signup(user){
        const url =`/register`;
        return axiosClient.post(url,user);
    },
    signin(user){
        const url =`/auth/login`;
        return axiosClient.post(url,user);
    },
    getAllUsers(){
        const url = `/users`;
        return axiosClient.get(url)
    }
    // read(id,user){
    //     const url =`/signin/${id}`;
    //     return axiosClient.get(url,user);
    // },
    // getAll(){
    //     const url = '/user';
    //     return axiosClient.get(url);
    // }
}
export default AuthAPI;