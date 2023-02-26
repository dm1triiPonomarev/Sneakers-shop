import React from 'react'
import { currentOrderCount } from './SneakersList/BuyFunction'

const Order = () => {
	return (
		<div>
			<h1>TOTAL:</h1>
			{currentOrderCount} руб.
		</div>
	)
}

export default Order
