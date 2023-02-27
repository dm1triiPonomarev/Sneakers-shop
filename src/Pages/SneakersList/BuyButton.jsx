import React, { useState } from 'react'
import BuyFunction, { Check, currentOrderCount } from './BuyFunction';
import added from './/imgs/added.svg'
import plus from './/imgs/plus.svg'
import OrderModal from '../../Components/OrderModal/OrderModal';

const BuyButton = (price) => {

	const [isBought, setIsBought] = useState(false)


	return (

		<>
			{
				isBought === true
					?
					<button onClick={() => { setIsBought(false); Check() }}   >

						<img src={added} alt="plus" />
					</button>
					:
					<button onClick={() => { setIsBought(true); BuyFunction(price) }} className={'buy-btn'}  >
						<img src={plus} alt="buy" />
					</button>
			}

		</>

	)

}

export default BuyButton
