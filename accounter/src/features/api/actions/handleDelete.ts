import baseAxios from "../baseAxios";

export const handleDelete = async (id: string) => {
	try {
		const response = await baseAxios.delete(`/users/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Успешное удаление аккаунта", response.status);
	} catch (error) {
		console.error("Ошибка удаления:", error);
		throw error;
	}
};
