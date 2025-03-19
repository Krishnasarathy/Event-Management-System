import insance from "./axios";
const api_uri = "http://localhost:8181"

const request_mapping = "/api/v1/user"

export const userList = () => insance.get(`${api_uri} + ${request_mapping}/list`);