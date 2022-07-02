import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: "", body: "" });

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now(),
		};
		create(newPost);
		setPost({ title: "", body: "" });
	};

	return (
		<form>
			<h1 style={{ textAlign: "center" }}>Create new post</h1>
			<MyInput
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				type="text"
				placeholder="Caption"
			/>
			<MyInput
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				type="text"
				placeholder="Description"
			/>
			<MyButton
				style={{ display: "block", margin: "10px auto" }}
				onClick={addNewPost}
			>
				Create post
			</MyButton>
		</form>
	);
};

export default PostForm;
