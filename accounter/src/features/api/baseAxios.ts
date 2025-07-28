import axios from "axios";

const baseAxios = axios.create({
	baseURL: "/api/v1",
	withCredentials: true,
});

export default baseAxios;
