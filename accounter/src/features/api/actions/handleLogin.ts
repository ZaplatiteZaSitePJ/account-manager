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

		console.log("Логин успешен:", response.status);

		const info = await baseAxios.get("/auth/me", {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		return info.data.sub;
	} catch (error) {
		console.error("Ошибка логина:", error);
		throw error;
	}
};
