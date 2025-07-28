import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
} from "react-router-dom";
import Main from "@pages/main/Main";
import { AuthLayout, MainLayout } from "@shared/ui";
import EditPage from "@pages/edit/EditPage";
import Login from "@pages/login/Login";
import { getUser } from "@features/api/get/getUser";
import CreatePage from "@pages/create/Create";
import { combinedGetter } from "@features/api/get/combinedGetter";
import { getUserForEdit } from "@features/api/get/getUserForEdit";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Outlet />}>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Main />} loader={combinedGetter} />
				<Route
					path="user/edit"
					element={<EditPage />}
					loader={getUser}
				/>
				<Route
					path="user/edit/:id"
					element={<EditPage />}
					loader={getUserForEdit}
				/>
				<Route
					path="user/create"
					element={<CreatePage />}
					loader={getUser}
				/>
				<Route path="*" element={<p>Страницы не существует</p>} />
			</Route>

			<Route path="/" element={<AuthLayout />}>
				<Route path="/auth/login" element={<Login />} />
			</Route>
		</Route>
	)
);

export default router;
