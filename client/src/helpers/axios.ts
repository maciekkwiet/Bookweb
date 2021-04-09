import axios from 'axios';
//change name to token not authorization
// const baseURL = process.env.REACT_APP_BACKEND_URL;
const baseURL = 'http://localhost:8080';
type headerType = { authorization?: string };

let headers: headerType = {};

const accessToken = localStorage.getItem('token');
if (accessToken) headers.authorization = accessToken;

export const Axios = axios.create({ baseURL, headers });
