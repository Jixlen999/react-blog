import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";

import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("auth")) {
			setIsAuth(true);
		}
	}, []);
	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
			}}
		>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
