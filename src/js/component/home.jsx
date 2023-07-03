import React from "react";
import TodoContainer from "./TodoContainer";


const Home = () => {
	return (
		<div className="text-center">
			<h1 className="title">todos</h1>
			<TodoContainer/>
		</div>
	)
};

export default Home;