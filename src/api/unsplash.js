import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 400cd166e6f212caa1112cc3248773bc76ef6303a55fa943c74ae5dcea6ab2fb'
	}
});