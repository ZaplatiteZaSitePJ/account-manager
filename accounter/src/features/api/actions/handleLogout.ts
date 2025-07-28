import baseAxios from "../baseAxios";

export const handleLogout = async ()=> {
    try {
        const response = await baseAxios.post(
            "/auth/logout",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        console.log("Успешный выход из аккаунта", response.data);
    } catch (error: any) {
        console.error("Ошибка логина:", error.response?.data || error.message);
        throw error;
    }
};
