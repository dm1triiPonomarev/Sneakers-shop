import React, { useState } from 'react'
import Header from '../Components/Header'
import BuyButton from './SneakersList/BuyButton';
import LikeButton from './SneakersList/LikeButton';


export const MainArray = [
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		src: '/img/sneakers/1.jpg',
		price: '12999',
		liked: true,
		id: 1
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999',
		liked: false,
		id: 2
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999',
		liked: false,
		id: 3
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999',
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999',
		liked: true
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: '/img/sneakers/2.jpg',
		price: '12999'
	},
]

// const content = document.querySelector('.content')
// content.onClick = function (event) {
// 	let target = event.target

// 	if (target.className === 'change') {
// 		ChangeActive(target)
// 	} else {
// 		return
// 	}
// }\\

const buttons = document.getElementsByClassName('change');
for (const button of buttons) {
	button.addEventListener('click', () => console.log('Clicked!'));
}








const SneakersList = () => {
	// const defaultLikeClass = 'card-unlike-btn'
	// const [likeClasses, setLikeClasses] = useState(defaultLikeClass)
	// const [buyClasses, setBuyClasses] = useState('')
	// const defaultLikeImg = '/img/unlike.svg'
	// const [likeImg, setLikeImg] = useState(defaultLikeImg)

	// function ChangeActive(item) {
	// 	if (item.liked === false) {
	// 		item.liked = true
	// 		// setLikeImg('/img/likedActive.svg')
	// 		// setLikeClasses('card-like-btn')
	// 	} else {
	// 		item.liked = false
	// 		// setLikeClasses(defaultLikeClass)
	// 		// setLikeImg(defaultLikeImg)
	// 	}
	// }

	return (
		<div>

			<div div className="content" >
				<div className="search-wrapper">
					<h1>Все кроссовки</h1>
					<div className="search">
						<button className='search-btn' >
							<img src="/img/search.svg" alt="search" />
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
