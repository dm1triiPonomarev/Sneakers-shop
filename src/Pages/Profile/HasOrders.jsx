import React from 'react'
import { Link } from 'react-router-dom'
import SneakerCard from '../../Components/SneakerCard'
import arrow from './/imgs/leftArrow.png'

const HasOrders = ({ itemArray }) => {

	return (
		<div >
			<div className="d-flex align-center">
				<Link to={'/'}>
					<button className='d-flex justify-center align-center' style={{ width: '35px', height: '35px', background: '#fff', border: '1px solid #f2f2f2', borderRadius: "8px", marginRight: "20px", textAlign: 'center' }}>
						<img src={arrow} alt="arrow" />
					</button>
				</Link>
				<h1>Мои покупки</h1>
			</div>


			<div className="content">
				<div className="sneakers ">
					{itemArray.map(items => {
						return items.map((item) => {
							return (
								<SneakerCard item={item} />
							)
						})
					})}
				</div>
			</div>

		</div>
	)
}

export default HasOrders
