import baseAxios from "../baseAxios";
import type { AccountType } from "@entities/Account/types/Account.interface";

export const handleLogin = async (
	email: string,
	password: string
): Promise<Pick<AccountType, "email" | "password">> => {
	try {
		const response = await baseAxios.post(
			"/auth/login",
			{ email, password },
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);

		console.log("Логин успешен:", response.data);

		const info = await baseAxios.get("/auth/me", {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Информация:", info.data);
		return info.data.sub;
	} catch (error: any) {
		console.error("Ошибка логина:", error.response?.data || error.message);
		throw error;
	}
};
