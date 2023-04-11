import { useDispatch, useSelector } from 'react-redux';
import { AddBoughtList, CancelIsBought, IsBought } from '../../Store/Reducers/BuyLogicReducer';
// import { AddBoughtList, IsBought } from '../../Store/Reducers/BoughtListReducer';
import { removeModal } from '../../Store/Reducers/ModalReducer';
import { NullCash } from '../../Store/Reducers/OrderCashReducer';
import EmptyOrder from '../OrderList/EmptyOrder/EmptyOrder';
import OrderDone from '../OrderList/OrderDone/OrderDone';
import OrderList from '../OrderList/OrderList';
import arrow from './/imgs/arrow.svg'

const OrderModal = () => {

	const dispatch = useDispatch()
	const currentOrderPrice = useSelector(state => state.cash.orderPrice)
	const OrderListForLength = useSelector(state => state.orderItems.orderList)
	const isBought = useSelector(state => state.orderItems.isBought)


	return (
		<>

			<div onClick={() => { dispatch(removeModal()); { isBought && dispatch(CancelIsBought()) } }} className='modal'>
				<div onClick={e => e.stopPropagation()} className="modal-content ">

					<h1 className='modal-title ' >Корзина</h1>

					{OrderListForLength.length <= 0 ?

						<EmptyOrder />
						:
						isBought === true ?
							<OrderDone />
							:
							<>

								<OrderList />
								<div className="order-footer-wrapper">

									<div className="mb-15">

										<div className="order-footer ">
											Итого:
											<div className="orderBorder"></div>
											<b>
												{currentOrderPrice} руб.
											</b>
										</div>

										<div className="order-footer">
											Налог 5%:
											<div className="orderBorder"></div>
											<b>
												{Math.round(currentOrderPrice * 0.05)} руб.
											</b>
										</div>
									</div>


									<button onClick={() => { dispatch(AddBoughtList(OrderListForLength)); dispatch(IsBought()); dispatch(NullCash()) }} className="order-btn">
										Оформить заказ
										<img className='orderArrowImg' src={arrow} alt="arrow" />
									</button>
								</div>
							</>
					}



				</div>
			</div>



		</>

	)
}

export default OrderModal
