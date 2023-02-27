import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LikedList from '../LikedList/LikedList'
import arrow from './/imgs/leftArrow.png'
import emoji from './/imgs/emoji.png'
import { MainArray } from '../SneakersList/SneakersList'

const Profile = () => {
	const formMass = ['Name', 'Surname', 'Login', 'Password']
	const [visible, setVisible] = useState(false)
	const [isSent, setIsSent] = useState(false)

	let orderList = (MainArray.filter(item => item.liked === true)).length

	function LoginList({ item }) {
		const [text, setText] = useState('')
		const [currentText, setCurrentText] = useState(item)
		return (
			<>
				<div>
					<h1 className='d-flex justify-center'>
						{item !== 'Password' ?
							currentText
							:
							item
						}
					</h1>
					<div className='d-flex justify-center align-center'>
						<div>
							<input className='profile-input' onChange={(e) => { setText(e.target.value); setCurrentText(e.target.value) }} value={text} type={item} placeholder={`${item}...`} />
							<button className='profile-btn' onClick={() => setText('')} type='sumbit'>save</button>
						</div>
					</div>
				</div>
			</>
		)
	}

	function NoOrders() {
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

							>←    Вернуться назад</span>  </button>
					</Link>
				</div>
			</>
		)
	}

	function HasOrders() {
		return (
			<div className="">
				<div className="d-flex align-center">
					<Link to={'/'}>
						<button className='d-flex justify-center align-center' style={{ width: '35px', height: '35px', background: '#fff', border: '1px solid #f2f2f2', borderRadius: "8px", marginRight: "20px", textAlign: 'center' }}>
							<img src={arrow} alt="arrow" />
						</button>
					</Link>
					<h1>Мои покупки</h1>
				</div>
				<div className="">
					<LikedList />
				</div>
			</div>
		)
	}

	function OrdersHistory() {
		return (
			<>
				{orderList > 0

					? <HasOrders />


					: <NoOrders />
				}
			</>
		)
	}

	return (
		<>
			<div className='p-40 align-center'>
				{isSent === true ?
					<OrdersHistory />
					:
					<div >
						{
							formMass.map(item => {
								return (
									<>
										{<LoginList item={item} />}
									</>
								)
							})
						}
						{LoginList}
						<div className="d-flex justify-center mt-35">
							<button onClick={() => setIsSent(true)} className='login-btn'>Send!</button>
						</div>
					</div>
				}
			</div>
		</>
	)
}

export default Profile
