import axios from "axios";

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080"

const apiClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
}) 

export default apiClient;