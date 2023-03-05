import React, { useState } from 'react'
import added from './/imgs/added.svg'
import plus from './/imgs/plus.svg'
import { useDispatch, useSelector } from 'react-redux';
import { Buy } from '../../Store/Reducers/OrderCashReducer';
import { AddItem } from '../../Store/Reducers/BuyLogicReducer';
import { setModal } from '../../Store/Reducers/ModalReducer';

const BuyButton = ({ item }) => {
	const dispatch = useDispatch()

	const orderList = useSelector(state => state.orderItems.orderList)

	return (

		<>
			{
				orderList.filter(orderItem => orderItem.id === item.id).length > 0
					?
					<button onClick={() => { dispatch(setModal()) }}   >
						<img src={added} alt="plus" />
					</button>
					:
					<button onClick={() => { dispatch(Buy(Number(item.price))); dispatch(AddItem(item)); }} className={'buy-btn'}  >
						<img src={plus} alt="buy" />
					</button>
			}

		</>

	)

}

export default BuyButton
