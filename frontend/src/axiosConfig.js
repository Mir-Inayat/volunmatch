// src/axiosConfig.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // This ensures cookies are sent with every request
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;