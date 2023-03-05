import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteItem, IsBought } from '../../Store/Reducers/BuyLogicReducer'
import { CancelBuy } from '../../Store/Reducers/OrderCashReducer'
import close from './/imgs/close.png'
const OrderList = () => {
	const dispatch = useDispatch()
	const OrderList = useSelector(state => state.orderItems.orderList)

	return (
		<>

			<div className="cart-list">
				{OrderList.map(item => {
					return (
						<div className="cart-item">
							<img width={70} height={70} src={item.src} alt="item" />
							<span style={{ maxWidth: '40%', margin: '0 15px' }}>
								<p>{item.title}</p>
								<b>{item.price} руб.</b>
							</span>
							<button onClick={() => { dispatch(DeleteItem(item.id)); dispatch(CancelBuy(item.price)); }} className='close-order-list-btn'>
								<img width={11} height={11} src={close} alt="close" />
							</button>
						</div>
					)
				})}
			</div>


		</>
	)
}

export default OrderList
