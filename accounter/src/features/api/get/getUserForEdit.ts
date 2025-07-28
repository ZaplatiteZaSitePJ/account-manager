import axios from "axios";
import baseAxios from "../baseAxios";
import { redirect } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import { getUser } from "./getUser";

export const getUserForEdit = async ({params} : LoaderFunctionArgs) => {
	
    const userId = params?.id

	try {
        
        const currentUser = await getUser()
        console.log("Текущий пользователь: ", currentUser)
        if (currentUser.id !== "1") {
            throw redirect("/")
        }

		const response = await baseAxios.get(`/users/${userId}`, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Информация:", response.data);
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
