import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, currentOrderCount } from '../../Pages/SneakersList/BuyFunction'
import logoImage from './/imgs/logo.png'
import cartImage from './/imgs/cart.svg'
import likedListImage from './/imgs/LikedList.png'
import userLogoImage from './/imgs/user.svg'
import Order from '../../Pages/Order/Order'
import OrderModal from '../OrderModal/OrderModal'

const Header = ({ currentCount }) => {

	const [isModal, setIsModal] = useState(false)

	function setmodal() {
		localStorage.setItem('modal', true)
	}

	return (

		<div>

			<header className="d-flex justify-between align-center">
				<div className="d-flex align-center">

					<Link to={'/'}>
						<img width={40} height={40} src={logoImage} alt='logo' />
					</Link>

					<div>
						<h3>
							REACT SNEAKERS
						</h3>
						<p>
							Магазин лучших кроссовок
						</p>
					</div>
				</div>

				<ul className="d-flex">
					{/* <Link to={'/order'}> */}
					<li onClick={() => setIsModal(true)} className="mr-30 d-flex">
						<img style={{ cursor: 'pointer' }} width={20} height={20} src={cartImage} alt='cart' />
						<span className='header-price'>{currentCount}  руб.</span>

					</li>
					{/* </Link> */}

					<li className='mr-30 d-flex'>
						<Link to={'/favorites'}>
							<img style={{ cursor: 'pointer' }} width={20} height={18} src={likedListImage} alt="likedList" />
						</Link>
					</li>

					<li className='d-flex'>
						<Link to={'/profile'}>
							<img style={{ cursor: 'pointer' }} width={18} height={18} src={userLogoImage} alt='user' />
						</Link>
					</li>
				</ul>

			</header>

		</div >

	)
}

export default Header
