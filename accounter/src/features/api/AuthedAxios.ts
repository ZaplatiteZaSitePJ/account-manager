import baseAxios from "./baseAxios";

const authedAxios = { ...baseAxios };

authedAxios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("v1Token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

authedAxios.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error(
			"Ошибка запроса:",
			error.response?.status,
			error.response?.data
		);
		return Promise.reject(error);
	}
);

export default authedAxios;
