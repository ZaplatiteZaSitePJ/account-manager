import { useLoaderData } from "react-router-dom";
import styles from "./Create.module.scss";
import CreateForm from "@widgets/CreateForm/CreateForm";

export default function CreatePage() {
	const { id } = useLoaderData();
	console.log(id);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Создать новый аккаунт</h1>
			{id !== "1" ? (
				<p>Данный функционал доступен только администратору!</p>
			) : (
				<CreateForm />
			)}
		</div>
	);
}
