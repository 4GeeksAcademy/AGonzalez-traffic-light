import React, {useState} from "react";
import Stick from "./Stick";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("green")

	return (
		<>
		<Stick />
		<div className="traffic-light">
			<div 
				onClick={() => setSelectedColor("red")}
				className={
				"light red" + (selectedColor === "red" ? " glow" : "")
		}></div>
			<div 
				onClick={() => setSelectedColor("yellow")}
				className={
				"light yellow" + (selectedColor === "yellow" ? " glow" : "")
		}></div>
			<div 
				onClick={() => setSelectedColor("green")}
				className={
				"light green" + (selectedColor === "green" ? " glow" : "")
				}></div>
		</div>
		</>
	);
};

export default Home;
