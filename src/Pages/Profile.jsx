import React from 'react'
import { currentOrderCount } from './SneakersList/BuyFunction'

const Profile = () => {
	return (
		<div className='d-flex'>
			{currentOrderCount}
		</div>
	)
}

export default Profile
