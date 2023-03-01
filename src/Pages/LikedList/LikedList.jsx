import React from 'react'
import { Link } from 'react-router-dom'
import BuyButton from '../SneakersList/BuyButton'
import LikeButton from '../SneakersList/LikeButton'
import { MainArray } from '../SneakersList/SneakersList'
import emoji from './/imgs/emoji.png'
import arrow from './/imgs/leftArrow.png'



const LikedList = () => {
	const filtredArray = MainArray.filter(item => item.liked === true)

	function NoLiked() {
		return (
			<>
				<div className="d-flex justify-center">
					<img src={emoji} alt="emnoji" />
				</div>
				<h1 className='text-center'>Закладок нет :(</h1>
				<p className='text-center opacity-4'>Вы ничего не добавляли в закладки</p>
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

	function HasLiked() {
		return (
			<>
				{/* <div className="d-flex align-center">
					<Link to={'/'}>
						<button className='d-flex justify-center align-center' style={{ width: '35px', height: '35px', background: '#fff', border: '1px solid #f2f2f2', borderRadius: "8px", marginRight: "20px", textAlign: 'center' }}>
							<img src={arrow} alt="arrow" />
						</button>
					</Link>
					<h1>Моe избранное</h1>
				</div> */}
				<div className='content'>
					<div style={{ justifyContent: 'left' }} className="sneakers">
						{filtredArray
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
			</>
		)
	}

	return (
		<div className='p-40'>
			{filtredArray.length > 0 ?
				<HasLiked />
				: <NoLiked />
			}
		</div>
	)
}

export default LikedList
