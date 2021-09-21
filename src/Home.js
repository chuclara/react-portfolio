import React from 'react'
import HeaderBar from "./components/HeaderBar";
import HomeFeature from "./components/HomeFeature";

import {Link } from "react-router-dom";

function Home(){
	return(
		<div>
			<HeaderBar />
			<HomeFeature />
		</div>
	)
}
export default Home;