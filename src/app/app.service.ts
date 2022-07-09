import axios from 'axios';
import { API_BASE_URL } from './app.config';

export const apiHttpClient = axios.create({
  //   baseURL: 'http://localhost:3000'
  baseURL: API_BASE_URL
});
