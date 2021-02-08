import axios from 'axios';
import { getAuthHeader } from 'services/auth';

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080',
	headers: getAuthHeader()
});
