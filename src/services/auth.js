import axios from 'axios';

const api_uri = "http://localhost:8181";
export const sign_in = (data) => axios.post(`${api_uri}/api/v1/auth/login`, data);
export const sign_up = (data) => axios.post(`${api_uri}/api/v1/auth/register`, data);
const token = sessionStorage.getItem('token')
export const event_reg = (data) => axios.post(`http://localhost:8181/api/v1/event`,{header:{Authorization:`Bearer ${token}`}}, data);