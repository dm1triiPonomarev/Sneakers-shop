import React, { useState } from 'react'



const Profile = () => {
	const formMass = ['Name', 'Surname', 'Login', 'Password']
	const [visible, setVisible] = useState(false)
	const [isSent, setIsSent] = useState(false)


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

	return (

		<div className='p-40 align-center'>
			{formMass.map(item => {
				return (
					<>
						{<LoginList item={item} />}
					</>
				)
			})}
			{LoginList}
			<div className="d-flex justify-center mt-35">
				<button onClick={() => setIsSent(true)} className='login-btn'>Send!</button>
			</div>
		</div>
	)
}

export default Profile
