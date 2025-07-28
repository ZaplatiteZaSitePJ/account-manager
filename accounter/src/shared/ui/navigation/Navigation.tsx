import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import cn from "classnames";
import { handleLogout } from "@features/api/actions/handleLogout";

export default function Navigation() {
	const navigate = useNavigate();
	const onLogout = async () => {
		try {
			await handleLogout();
			localStorage.removeItem("userId");
			navigate("/auth/login");
		} catch {
			console.log("что-то пошло не так");
		}
	};

	return (
		<nav className={styles.navigation}>
			<NavLink
				to={"/"}
				className={({ isActive }) =>
					cn(styles.navigation__pages, {
						[styles.navigation__active]: isActive,
					})
				}
			>
				аккаунт
			</NavLink>
			<NavLink
				to={"/user/edit"}
				className={({ isActive }) =>
					cn(styles.navigation__pages, {
						[styles.navigation__active]: isActive,
					})
				}
			>
				настроить
			</NavLink>
			<NavLink
				to={"/user/create"}
				className={({ isActive }) =>
					cn(styles.navigation__pages, {
						[styles.navigation__active]: isActive,
					})
				}
			>
				создать
			</NavLink>
			<button
				className={styles.navigation__logout}
				type="button"
				onClick={onLogout}
			>
				<span>выйти</span>
			</button>
		</nav>
	);
}
