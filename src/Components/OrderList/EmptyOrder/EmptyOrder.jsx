import React from 'react'
import { useDispatch } from 'react-redux'
import { removeModal } from '../../../Store/Reducers/ModalReducer'
import img from './/imgs/emptyCart.png'
const EmptyOrder = () => {
	const dispatch = useDispatch()
	return (
		<>

			<div className='order-done-wrapper'>
				<div className="d-block">

					<img src={img} alt="done" />


					<span>
						<h1 style={{ fontSize: '28px' }}>Корзина пустая</h1>
						<p style={{ opacity: 0.4 }} className='order-done-p'>Добавьте хотя бы одну пару кроссовок,<br /> чтобы сделать заказ.</p>
					</span>
				</div>


				<button onClick={() => dispatch(removeModal())} style={{ maxWidth: '250px', justifyContent: 'center' }} className='order-btn align-center'>
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

export default EmptyOrder
