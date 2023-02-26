import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import LikedList from "./Pages/LikedList/LikedList";
import Order from "./Pages/Order/Order";
import Profile from "./Pages/Profile/Profile";
import SneakersList from "./Pages/SneakersList/SneakersList";



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
