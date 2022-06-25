import { Route, Routes } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import { routes } from "../router/routes";

const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route) => (
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
};

export default AppRouter;
