import React from "react";
import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/index";

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const login = (event) => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem("auth", "true");
	};

	return (
		<div style={{ width: "30%", margin: "0 auto", marginTop: "5%" }}>
			<h1 style={{ textAlign: "center" }}>Log in </h1>
			<form onSubmit={login}>
				<MyInput type="text" placeholder="Nickname" />
				<MyInput type="password" placeholder="Password" />
				<MyButton style={{ margin: "0 auto", display: "block" }}>
					Enter
				</MyButton>
			</form>
		</div>
	);
};

export default Login;
