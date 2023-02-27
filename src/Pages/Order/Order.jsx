import React from 'react'
import { currentOrderCount } from '../SneakersList/BuyFunction'


const Order = () => {

	return (

		<div className='p-40 '>
			{currentOrderCount > 0 ?
				<>
					<h1>TOTAL:</h1>
					{currentOrderCount} руб.
				</>
				:
				<p></p>
			}
		</div>

	)
}

export default Order
