import React from 'react'
import { currentOrderCount } from '../SneakersList/BuyFunction'


const Order = () => {

	return (

		<div className='p-40 '>
			<h1>TOTAL:</h1>
			{currentOrderCount} руб.
		</div>

	)
}

export default Order
