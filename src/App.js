import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import LikedList from "./Pages/LikedList";
import Order from "./Pages/Order";
import Profile from "./Pages/Profile";
import SneakersList from "./Pages/SneakersLisrt";
import SneakersLisrt, { MainArray } from "./Pages/SneakersLisrt";

localStorage.setItem('currentCount', 0)





function App() {
	return (
		<>
			<div className="wrapper clear">

				<Header />
				<Routes>
					<Route path="/" element={<SneakersList />} />
					<Route path="/order" element={<Order />} />
					<Route path="/favorites" element={<LikedList />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>

			</div>

		</>
	);
}

export default App;
