import axios from 'axios';
import { io } from 'socket.io-client';
import { API_BASE_URL } from './app.config';

export const apiHttpClient = axios.create({
  //   baseURL: 'http://localhost:3000'
  baseURL: API_BASE_URL
});

/**
 *  Socket
 */
export const socket = io(API_BASE_URL);
