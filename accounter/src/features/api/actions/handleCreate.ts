import type { AccountType } from "@entities/Account/types/Account.interface";
import baseAxios from "../baseAxios";

type formatedUserType = {
	name: string;
	surName: string;
	fullName: string;
	email: string;
	employment?: string;
	password: string;
	userAgreement?: boolean;
	telephone?: string;
	birthDate?: string;
};

export const handleCreate = async (newUser: AccountType) => {
	const {
		name,
		surName,
		email,
		password,
		telephone,
		employment,
		birthDate,
		userAgreement,
	} = newUser;

	const formatedUser: formatedUserType = {
		name,
		surName,
		fullName: `${name} ${surName}`,
		email,
		employment,
		userAgreement: userAgreement,
		password,
	};

	if (telephone) {
		formatedUser.telephone = telephone;
	}

	if (birthDate) {
		formatedUser.birthDate = birthDate;
	}

	try {
		const response = await baseAxios.post(`/users/`, formatedUser, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Успешное создание аккаунта", response.status);
	} catch (error: unknown) {
		console.error("Ошибка создания:", error);
		throw error;
	}
};
