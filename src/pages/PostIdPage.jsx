import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/loader/Loader";
import { useFetching } from "../components/hooks/useFetching";

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(params.id);
		setPost(response.data);
	});
	const [fetchComments, isComLoading, comerror] = useFetching(async () => {
		const response = await PostService.getCommentsByPostId(params.id);
		setComments(response.data);
	});

	useEffect(() => {
		fetchPostById();
		fetchComments();
	}, []);

	return (
		<div style={{ padding: "30px" }}>
			<h1>Post: {post.title}</h1>
			{isLoading ? <Loader /> : <div>{post.body}</div>}
			<h2 style={{ marginTop: "20px" }}>Comments</h2>
			{isComLoading ? (
				<Loader />
			) : (
				<div>
					{comments.map((comm) => (
						<div key={comm.id} style={{ marginTop: "15px" }}>
							<h5>{comm.email}</h5>
							<div>{comm.body}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PostIdPage;
