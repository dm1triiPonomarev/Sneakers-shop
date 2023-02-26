import React, { useState } from 'react'
import { CheckOrder } from '../../Components/Header';
import BuyFunction, { Check, currentOrderCount } from './BuyFunction';



const BuyButton = (price) => {

	const [isBought, setIsBought] = useState(false)

	return (

		<>
			{
				isBought === true
					?
					<button onClick={() => { setIsBought(false); }}   >
						<img src={"/img/added.svg"} alt="plus" />
					</button>
					:
					<button onClick={() => { setIsBought(true); BuyFunction(price) }} className={'buy-btn'}  >
						<img src={"/img/plus.svg"} alt="buy" />
					</button>
			}
		</>

	)

}

export default BuyButton
