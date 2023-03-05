import React, { useEffect, useState } from 'react'
import first from './/imgs/sneakers/1.jpg'
import second from './/imgs/sneakers/2.jpg'
import searchLogo from './/imgs/search.svg'

import axios from 'axios';
import SneakerCard from '../../Components/SneakerCard';
import Slider from './Slider';


export const MainArray = [
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		src: first,
		price: '12999',
		id: 1
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',

		id: 2
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',

		id: 3
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		id: 4
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		id: 5
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		id: 6
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		liked: '',
		id: 7
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		id: 8
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		id: 9
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		id: 10
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		id: 11
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		src: second,
		price: '12999',
		id: 12
	},
]



const SneakersList = () => {
	const [filterArgs, setFilterArgs] = useState('')

	return (
		<div>
			<div div className="content" >
				<Slider />
				<div className="search-wrapper">
					<h1>Все кроссовки</h1>
					<div className="search">
						<button className='search-btn' >
							<img src={searchLogo} alt="search" />
						</button>
						<input onChange={(e) => setFilterArgs(e.target.value)} type="text" className="search-input " placeholder='Поиск...' />
					</div>
				</div>

				<div className="sneakers ">
					{MainArray
						.filter(item => item.title.toLocaleLowerCase().includes(filterArgs))
						.map(item => {
							return (
								<SneakerCard item={item} />

							)
						})}
				</div>

			</div>
		</div>
	)
}

export default SneakersList
