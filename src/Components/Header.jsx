import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, currentOrderCount } from '../Pages/SneakersList/BuyFunction'



const Header = () => {




	return (

		<div>

			<header className="d-flex justify-between align-center">
				<div className="d-flex align-center">

					<Link to={'/'}>
						<img width={40} height={40} src="/img/logo.png" />
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

					<li className="mr-30 d-flex">
						<Link to={'/order'}>
							<img style={{ cursor: 'pointer' }} width={20} height={20} src="/img/cart.svg" alt='cart' />
						</Link>


						<span className='header-price'>{currentOrderCount}  руб.</span>

					</li>

					<li className='mr-30 d-flex'>
						<Link to={'/favorites'}>
							<img style={{ cursor: 'pointer' }} width={20} height={18} src="/img/LikedList.png" alt="likedList" />
						</Link>
					</li>

					<li className='d-flex'>
						<Link to={'/profile'}>
							<img style={{ cursor: 'pointer' }} width={18} height={18} src="/img/user.svg" alt='user' />
						</Link>
					</li>
				</ul>

			</header>

		</div >

	)
}

export default Header
