import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const classRed = color === "red" ? "red selected" : "red";
	const classYellow = color === "yellow" ? "yellow selected" : "yellow";
	const classGreen = color === "green" ? "green selected" : "green";

	return (
		<>
			<div className="trafficTop"></div>
			<div className="traffic-light">
				<div
					className={classRed}
					onClick={() => {
						if (color === "red") setColor("");
						else setColor("red");
					}}></div>
				<div
					className={classYellow}
					onClick={() => {
						if (color === "yellow") setColor("");
						else setColor("yellow");
					}}></div>
				<div
					className={classGreen}
					onClick={() => {
						if (color === "green") setColor("");
						else setColor("green");
					}}></div>
			</div>
		</>
	);
};

export default Home;
