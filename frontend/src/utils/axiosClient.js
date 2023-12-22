import axios from "axios";

export const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_APP_URL}`
});
//`${process.env.REACT_APP_APP_URL}`

