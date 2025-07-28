import EditForm from "@widgets/EditForm/EditForm";
import styles from "./EditPage.module.scss";

export default function EditPage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Редактируйте аккаунт</h1>
			<EditForm />
		</div>
	);
}
