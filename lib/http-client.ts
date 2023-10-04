import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/last/'
});

export default axiosInstance;
