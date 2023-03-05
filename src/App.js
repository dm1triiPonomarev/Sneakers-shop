import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import OrderModal from "./Components/OrderModal/OrderModal";
import LikedList from "./Pages/LikedList/LikedList";

import Profile from "./Pages/Profile/Profile";
import SneakersList from "./Pages/SneakersList/SneakersList";




function App() {
	const isModal = useSelector(state => state.modal.isModal)




	return (
		<>

			<div className="wrapper clear">

				<Header />
				<Routes>
					<Route path="/" element={<SneakersList />} />
					<Route path="/favorites" element={<LikedList />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>

			{isModal === true &&
				<OrderModal />
			}

		</>
	);
}

export default App;
