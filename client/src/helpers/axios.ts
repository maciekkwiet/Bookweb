import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://books-web-portal.herokuapp.com/';
type headerType = { authorization?: string };

let headers: headerType = {};

const accessToken = localStorage.getItem('token');
if (accessToken) headers.authorization = accessToken;

export const Axios = axios.create({ baseURL, headers });
