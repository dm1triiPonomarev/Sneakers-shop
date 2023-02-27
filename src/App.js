import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import OrderModal from "./Components/OrderModal/OrderModal";
import LikedList from "./Pages/LikedList/LikedList";
import Order from "./Pages/Order/Order";
import Profile from "./Pages/Profile/Profile";
import SneakersList from "./Pages/SneakersList/SneakersList";



localStorage.setItem('currentCount', 0)
// localStorage.setItem('modal', false)




function App() {
	let currentCount = Number(localStorage.getItem('currentCount'))
	let isModal = localStorage.getItem('modal')

	function setModal(arg) {
		console.log(arg);
		localStorage.setItem('modal', arg)
	}

	return (
		<>

			<div className="wrapper clear">

				<Header currentCount={currentCount} />
				<Routes>
					<Route path="/" element={<SneakersList />} />
					{/* <Route path="/order" element={<Order />} /> */}
					<Route path="/favorites" element={<LikedList />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>

			</div>


			{true === true &&
				<OrderModal />
			}

		</>
	);
}

export default App;
