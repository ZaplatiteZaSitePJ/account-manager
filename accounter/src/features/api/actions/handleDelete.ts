import baseAxios from "../baseAxios";

export const handleDelete = async (id: string)=> {
    
    try {
        const response = await baseAxios.delete(
            `/users/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        console.log("Успешное удаление аккаунта", response.data);
    } catch (error: any) {
        console.error("Ошибка удаления:", error.response?.data || error.message);
        throw error;
    }
};
