import React from 'react'
import { Link } from 'react-router-dom'
import emoji from './/imgs/emoji.png'
const NoOrders = () => {
	return (
		<>
			<div className="d-flex justify-center">
				<img src={emoji} alt="emnoji" />
			</div>
			<h1 className='text-center'>У вас нет заказов</h1>
			<p className='text-center opacity-4'>Вы нищеброд? <br />Оформите хотя бы один заказ.</p>
			<div className="d-flex justify-center">

				<Link to={'/'}>
					<button style={{ maxWidth: '250px' }} className='order-btn align-center'>
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

						>←    Вернуться на главную</span>  </button>
				</Link>
			</div>
		</>
	)
}

export default NoOrders
