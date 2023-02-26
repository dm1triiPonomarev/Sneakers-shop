import React from 'react'
import { MainArray } from './SneakersLisrt'
import BuyButton from './SneakersList/BuyButton'
import LikeButton from './SneakersList/LikeButton'

const LikedList = () => {
	return (
		<div className='content'>
			<div style={{ justifyContent: 'left' }} className="sneakers">
				{MainArray
					.filter(item => item.liked === true)
					.map(item => {
						return (
							<div style={{ marginRight: '40px' }} key={item.id} className="card">
								<div className="sneaker-wrapper">
									<LikeButton item={item} />
									<img className="sneakers-img" width={133} height={112} src={item.src} alt='sneakers-img' />
								</div>
								<h5 className="sneaker-title">{item.title}</h5>



								<div>
									<div className="priceInner">
										<div>
											<span className="priceSpan">Price:</span>
											<br />
											<b className="itemPrice">{item.price}</b>
										</div>
										<BuyButton price={item.price} />
									</div>
								</div>
							</div>

						)
					})
				}
			</div>
		</div>
	)
}

export default LikedList
