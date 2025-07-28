import type { AccountType } from "@entities/Account/types/Account.interface";
import styles from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import EmailField from "@features/userForm/ui/EmailField";
import { emailOptions } from "@features/userForm/options/email.options";
import PasswordField from "@features/userForm/ui/PasswordField";
import { handleLogin } from "@features/api/actions/handleLogin";
import { ButtonFilled } from "@shared/ui/ui-kit/buttons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
	const { register, handleSubmit, reset, getValues } =
		useForm<Pick<AccountType, "email" | "password">>();
	const [isError, setIsError] = useState(false);

	const navigate = useNavigate();


	const onAuth = async () => {
		try {
			const id = await handleLogin(
				getValues("email"),
				getValues("password")
			);
			console.log(getValues());

			localStorage.setItem("userId", String(id));
			reset();
			navigate("/");
		} catch {
			setIsError(true);
		}
	};

	return (
		<form className={styles.userForm} onSubmit={handleSubmit(onAuth)}>
			<EmailField register={register("email", emailOptions)} />

			<PasswordField
				register={register("password", {
					required: "Пароль обязателен",
				})}
			/>

			<div className={styles.userForm__buttonsContainer}>
				<ButtonFilled
					type="submit"
					sx={{
						backgroundColor: "var(--green-color)",
						borderColor: "var(--green-color)",
					}}
				>
					Войти
				</ButtonFilled>
			</div>
			<div
				style={{ display: isError ? "block" : "none" }}
				className={styles.errorDiv}
			>
				<p>Неправильный логин или пароль!</p>
			</div>
		</form>
	);
};

export default LoginForm;
