import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router/routes";

const AppRouter = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	return isAuth ? privateRoute() : publicRoute();
};

export default AppRouter;

function privateRoute() {
	return (
		<Routes>
			{privateRoutes.map((route) => (
				<Route
					path={route.path}
					element={route.element}
					exact={route.exact}
					key={new Date()}
				/>
			))}
			<Route path="*" element={<Posts />} />
		</Routes>
	);
}

function publicRoute() {
	return (
		<Routes>
			{publicRoutes.map((route) => (
				<Route
					path={route.path}
					element={route.element}
					exact={route.exact}
					key={new Date()}
				/>
			))}
			<Route path="*" element={<Login />} />
		</Routes>
	);
}
