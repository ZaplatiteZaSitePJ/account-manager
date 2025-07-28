import baseAxios from "../baseAxios";

export const handleLogout = async () => {
	try {
		const response = await baseAxios.post("/auth/logout", {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Успешный выход из аккаунта", response.status);
	} catch (error) {
		console.error("Ошибка логина:", error);
		throw error;
	}
};
