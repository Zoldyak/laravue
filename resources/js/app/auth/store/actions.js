import Axios from "axios"
import { setHttpToken } from "../../../helpers";
import { result } from "lodash";
export const register = ({dispatch},{payload,context}) => {
    // console.log(payload);
    return Axios.post("/api/auth/register",payload)
    .then((result)=>{
        dispatch("setTokens",result.data.meta.token).then(()=>{
            // console.log(result.data.data);
            dispatch("fetchUser",result.data.data)
        })

    }).catch((err)=>{
        context.errors=  err.response.data.errors;
    })

} 
export const login = ({dispatch},{payload,context})=>{
    return Axios
    .post("/api/auth/login",payload)
    .then((result)=>{
        dispatch("setTokens",result.data.meta.token).then(()=>{
            // console.log(result.data.data);
            dispatch("fetchUser",result.data.data)
        })
        // dispatch("setToken", result.data.meta.token).then(() => {
        //     console.log(result.data.meta.token);
        // });
        
    })
    .catch((err)=>{
        context.errors= err.response.data.errors
    })
    
}
export const setTokens = ({commit},token)=>{
    commit("setToken",token);
    setHttpToken(token)
}
export const fetchUser = ({commit},user)=>{
    // commit("setAuthenticated",true);
    // commit("setUserData",user);
    Axios.get("/api/user")
    .then(result => {
        console.log(result.data)
    })
    .catch(err => {
        console.error(err.response.data); 
    })
}