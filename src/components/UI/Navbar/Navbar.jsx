import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem("auth");
	};

	return (
		<div className="navbar">
			<MyButton onClick={logout}>Log in</MyButton>
			<div className="navbar__links">
				<Link to="/about">
					<MyButton>About</MyButton>
				</Link>
				<Link to="/posts">
					<MyButton>Posts</MyButton>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
