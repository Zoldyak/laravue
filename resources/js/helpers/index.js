import { isEmpty } from "lodash";
export const setHttpToken= token =>{
    if (isEmpty(token)) {
        window.axios.defaults.headers.common['Autorization']=null;
    } else {
        window.axios.defaults.headers.common['Autorization']="Bearer " + token;
    }
}