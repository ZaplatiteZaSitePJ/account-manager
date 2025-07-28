import axios from "axios";
import baseAxios from "../baseAxios";
import { redirect } from "react-router-dom";

export const getAllUsers = async () => {
	try {
		const response = await baseAxios.get(`/users/`, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Все пользователи:", response.data);
		return response.data;
	} catch (error: unknown) {
		if (
			axios.isAxiosError(error) &&
			(error.response?.status === 404 || error.response?.status === 401)
		) {
			console.log("Необходимо пройти авторизацию!");
			throw redirect("/auth/login");
		}
		console.error(
			"Ошибка логина:",
			axios.isAxiosError(error) ? error.response?.data : error
		);
		throw error;
	}
};
