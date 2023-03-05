import React from 'react'
import { Link } from 'react-router-dom'
import SneakerCard from '../../Components/SneakerCard'
import arrow from './/imgs/leftArrow.png'


const HasLiked = ({ LikedArr }) => {
	return (
		<>

			<div className="d-flex align-center">
				<span className="d-flex mt-40 ml-40 align-center">
					<Link to={'/'}>
						<button className='d-flex justify-center align-center' style={{ width: '35px', height: '35px', background: '#fff', border: '1px solid #f2f2f2', borderRadius: "8px", marginRight: "20px", textAlign: 'center' }}>
							<img src={arrow} alt="arrow" />
						</button>
					</Link>
					<h1 >Моe избранное</h1>
				</span>
			</div>
			<div className='content'>
				<div className="sneakers">
					{LikedArr
						.map(item => {
							return (
								<div className="">
									<SneakerCard item={item} />
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default HasLiked
