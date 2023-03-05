import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import HasOrders from './HasOrders'
import NoOrders from './NoOrders'

const Profile = () => {
	const formMass = ['Name', 'Surname', 'Login', 'Password']
	const [isSent, setIsSent] = useState(false)

	let boughtList = useSelector(state => state.orderItems.boughtList)


	function LoginList({ item }) {
		const [text, setText] = useState('')
		const [currentText, setCurrentText] = useState(item)
		function defaltValue(current) {
			if (current.length > 0) {
				return current
			} else {
				return item
			}
		}

		return (
			<>
				<div>
					<h1 className='d-flex justify-center'>
						{item !== 'Password' ?
							defaltValue(currentText)
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





	return (
		<>
			<div className=' m-20 p-40 align-center'>
				{isSent !== true ?

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

						<div className="d-flex justify-center mt-35">
							<button onClick={() => setIsSent(true)} className='login-btn'>Send!</button>
						</div>
					</div>
					:
					boughtList.length > 0 ?
						<HasOrders itemArray={boughtList} />
						:
						<NoOrders />
				}
			</div>
		</>
	)
}

export default Profile
