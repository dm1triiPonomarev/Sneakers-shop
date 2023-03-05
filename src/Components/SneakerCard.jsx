import React from 'react'
import BuyButton from '../Pages/SneakersList/BuyButton'
import LikeButton from '../Pages/SneakersList/LikeButton'

const SneakerCard = ({ item }) => {
	return (
		<div key={item.id} className="card">
			<span>
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
						<BuyButton price={item.price} item={item} />
					</div>
				</div>
			</span>
		</div>
	)
}

export default SneakerCard
