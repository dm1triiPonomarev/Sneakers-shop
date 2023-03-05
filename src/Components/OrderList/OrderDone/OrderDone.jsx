import React from 'react'
import { useDispatch } from 'react-redux'
import { CancelIsBought } from '../../../Store/Reducers/BuyLogicReducer'

import { removeModal } from '../../../Store/Reducers/ModalReducer'
import doneImg from './/imgs/orderDone.svg'

const OrderDone = () => {
	const dispatch = useDispatch()
	return (
		<>

			<div className='order-done-wrapper'>
				<div className="d-block">

					<img src={doneImg} alt="done" />


					<span>
						<h1 className='order-done-h1'>Заказ оформлен!</h1>
						<p style={{ opacity: 0.4 }} className='order-done-p'>Ваш заказ скоро будет передан курьерской доставке</p>
					</span>
				</div>


				<button onClick={() => { dispatch(removeModal()); dispatch(CancelIsBought()) }} style={{ maxWidth: '250px', justifyContent: 'center' }} className='order-btn align-center'>
					<span
						style={{
							fontFamily: 'Inter',
							fontStyle: "normal",
							fontWeight: 600,
							fontSize: "16px",
							lineHeight: "19px",
							textAlign: "center",
							color: "#FFFFFF"
						}}

					>←    Вернуться назад</span>  </button>

			</div>
		</>
	)
}

export default OrderDone
