import axios from 'axios';

// const baseURL = 'http://127.0.0.1:3333';
const baseURL = 'http://localhost:3333';
// const baseURL = 'http://172.17.0.1:3333';
// const baseURL = 'https://application-mock-server.loca.lt/';


export const api = axios.create({
  baseURL,
});