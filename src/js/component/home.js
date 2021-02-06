import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import Navbar from "./navbar.js";
import Information from "./information.js";
export function Home() {
	return (
		<div>
			<Navbar />
		</div>
	);
}
