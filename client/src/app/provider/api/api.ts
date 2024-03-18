import axios from 'axios';

interface IAPIConfig {
	baseURL: string;
}

const API_URL = 'http://localhost:5000/api';

const ApiConfig: IAPIConfig = {
	baseURL: API_URL,
};

const phoneAPI = axios.create(ApiConfig);

export const fetchPhones = async () => {
	return phoneAPI.get('/phones');
};
