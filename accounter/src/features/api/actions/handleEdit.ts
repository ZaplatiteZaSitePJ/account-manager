import type { AccountType } from "@entities/Account/types/Account.interface";
import baseAxios from "../baseAxios";

type patchedUserType = {
	name: string;
	surName: string;
	fullName: string;
	employment?: string;
	userAgreement?: boolean;
	telephone?: string;
	birthDate?: string;
};

export const handleEdit = async (editedUser: AccountType) => { 
    const {
        id,
		name,
		surName,
		telephone,
		employment,
		birthDate,
		userAgreement,
	} = editedUser;

    console.log(editedUser)

    const formatedUser: patchedUserType = {
		name,
		surName,
		fullName: `${name} ${surName}`,
		employment,
		userAgreement: userAgreement,
	};

    if (telephone) {
		formatedUser.telephone = telephone;
	}

	if (birthDate) {
		formatedUser.birthDate = `${birthDate}`;
        console.log(formatedUser.birthDate)
	}
    
    try {
        const response = await baseAxios.patch(
            `/users/${id}`, 
            formatedUser,

            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        console.log("Успешное Изменения аккаунта", response.data);
    } catch (error: any) {
        console.error("Ошибка изменения:", error.response?.data || error.message);
        throw error;
    }
};
