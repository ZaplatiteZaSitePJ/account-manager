import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

export default function AuthLayout() {
	return (
		<div className={styles.background}>
			<div className={styles.authLayout}>
				<header className={styles.authLayout__header}>
					<div>
						<p className={styles.authLayout__headerTitle}>
							Accounter
						</p>
					</div>
				</header>
				<div className={styles.authLayout__wrapper}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
