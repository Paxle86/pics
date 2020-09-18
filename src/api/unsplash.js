import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID E0v4RreC7mxAuquaHxbbDK9iB2xDj0J9Zm2dDX4-wQ8',
	},
});
