import React, { useEffect, useState } from 'react'
import BuyButton from '../SneakersList/BuyButton';
import LikeButton from '../SneakersList/LikeButton';
import first from './/imgs/sneakers/1.jpg'
import second from './/imgs/sneakers/2.jpg'
import searchLogo from './/imgs/search.svg'
import { currentOrderCount } from './BuyFunction';

export const MainArray = [
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		src: first,
		price: '12999',
		liked: true,
		id: 1
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		liked: false,
		id: 2
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		liked: false,
		id: 3
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		liked: true
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999'
	},
]



const SneakersList = () => {


	return (
		<div>
			{currentOrderCount}
			<div div className="content" >
				<div className="search-wrapper">
					<h1>Все кроссовки</h1>
					<div className="search">
						<button className='search-btn' >
							<img src={searchLogo} alt="search" />
						</button>
						<input type="text" className="search-input " placeholder='Поиск...' />
					</div>
				</div>

				<div className="sneakers ">
					{MainArray
						.filter(item => item.title.toLocaleLowerCase().includes(''))
						.map(item => {
							return (
								<div key={item.id} className="card">
									<div className="sneaker-wrapper">
										<LikeButton item={item} />
										<img className="sneakers-img" width={133} height={112} src={item.src} alt='sneakers-img' />
									</div>
									<h5 className="sneaker-title">{item.title}</h5>



									<div>
										<div className="priceInner">
											<div>
												<span className="priceSpan">Price:</span>
												<br />
												<b className="itemPrice">{item.price}</b>
											</div>
											<BuyButton price={item.price} />
										</div>
									</div>
								</div>

							)
						})}
				</div>

			</div>
		</div>
	)
}

export default SneakersList
