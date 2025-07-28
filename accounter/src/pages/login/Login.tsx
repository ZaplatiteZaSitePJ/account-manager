import LoginForm from "@widgets/LoginForm/LoginForm";
import styles from "./Login.module.scss";

export default function LoginPage() {
	return (
		<div className={styles.login}>
			<h1 className={styles.title}>Войдите в аккаунт</h1>
			<LoginForm />
		</div>
	);
}
