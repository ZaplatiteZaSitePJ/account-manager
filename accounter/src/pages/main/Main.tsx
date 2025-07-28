import Account from "@entities/Account/ui/Account";
import styles from "./Main.module.scss";
import { useLoaderData } from "react-router-dom";
import UsersTable from "@widgets/UsersTable/UsersTable";

export default function MainPage() {
	const { userData, allUsersData } = useLoaderData();

	return (
		<div className={styles.container}>
			<Account
				id={userData.id}
				telephone={userData.telephone}
				fullName={userData.fullName}
				email={userData.email}
				employment={userData.employment}
			/>
			{userData.id === "1" && <UsersTable allUsersData={allUsersData} />}
		</div>
	);
}
