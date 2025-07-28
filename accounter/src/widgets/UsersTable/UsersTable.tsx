import styles from "./UsersTable.module.scss";
import type { AccountType } from "@entities/Account/types/Account.interface";
import { handleDelete } from "@features/api/actions/handleDelete";
import { ButtonBordered } from "@shared/ui/ui-kit/buttons";
import { useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";

type UsersTableProps = {
	allUsersData: AccountType[];
};

const UsersTable: FC<UsersTableProps> = ({ allUsersData }) => {
	const [filtredUsers, setFiltredUsers] = useState<AccountType[]>([]);

	const deleteUser = async (id: string) => {
		try {
			await handleDelete(id);
			const clearedUsers = filtredUsers.filter((user) => user.id !== id);
			setFiltredUsers(clearedUsers);
		} catch {
			console.log("Что-то пошло не так");
		}
	};

	const navigate = useNavigate();

	useEffect(() => {
		setFiltredUsers(allUsersData.filter((user) => user.id !== "1"));
	}, []);

	if (filtredUsers.length === 0) {
		return <p>Нет других пользователей</p>;
	}

	return (
		<table className={styles.table}>
			<caption>Список пользователей:</caption>
			<thead>
				<tr>
					<th className={styles.fullName}>фамилия и имя</th>
					<th className={styles.id}>id</th>
					<th className={styles.email}>почта</th>
					<th className={styles.employment}>должность</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{filtredUsers.map((user: AccountType) => (
					<>
						<tr key={user.id}>
							<td className={styles.fullName}>
								{user.fullName}
							</td>
							<td className={styles.id}>{user.id}</td>
							<td className={styles.email}>{user.email}</td>
							<td className={styles.employment}>
								{user.employment ? user.employment : "—"}
							</td>
							<td>
								<ButtonBordered
									onClick={() => deleteUser(user.id)}
									sx={{
										color: "var(--light-grey-color)",
										borderColor: "var(--red-color)",
									}}
								>
									Удалить
								</ButtonBordered>
							</td>
							<td>
								<ButtonBordered
									onClick={() =>
										navigate(`/user/edit/${user.id}`)
									}
								>
									изменить
								</ButtonBordered>
							</td>
						</tr>
					</>
				))}
			</tbody>
		</table>
	);
};

export default UsersTable;
