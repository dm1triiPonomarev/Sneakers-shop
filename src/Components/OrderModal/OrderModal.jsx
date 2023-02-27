import React, { useState } from 'react'
import LikedList from '../../Pages/LikedList/LikedList';
import { currentOrderCount } from '../../Pages/SneakersList/BuyFunction';
import arrow from './/imgs/arrow.svg'

const OrderModal = ({ setModal }) => {

	const [visible, setVisible] = useState(true)

	return (
		<>

			{visible &&
				<div onClick={e => { setVisible(false); setModal(false) }} className='modal'>

					<div onClick={e => e.stopPropagation()} className="modal-content">
						<h1 className='mr-30' >Корзина</h1>

						<LikedList />
						<div className="order-footer">
							<div className="d-flex mb-20 justify-between">
								Итого:
								<div className="orderBorder"></div>
								<b>
									{currentOrderCount} руб.
								</b>
							</div>

							<div className="d-flex  justify-between">
								Налог 5%:
								<div className="orderBorder"></div>
								<b>
									{currentOrderCount * 0.05} руб.
								</b>
							</div>





							<button onClick={() => { setModal(false); setVisible(false) }} className="order-btn">
								Оформить заказ
								<img className='orderArrowImg' src={arrow} alt="arrow" />
							</button>
						</div>
					</div>

				</div>
			}
		</>

	)
}

export default OrderModal
