import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Post from "./Post";

function PostList({ posts, title, remove }) {
	if (!posts.length) {
		return <h1 style={{ textAlign: "center" }}>Posts not found!</h1>;
	}
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>{title}</h1>
			<TransitionGroup>
				{posts.map((postItem, index) => (
					<CSSTransition key={postItem.id} timeout={500} classNames="post">
						<Post remove={remove} number={index + 1} post={postItem} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
}

export default PostList;
