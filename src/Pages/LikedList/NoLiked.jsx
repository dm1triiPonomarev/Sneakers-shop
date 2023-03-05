import React from 'react'
import { Link } from 'react-router-dom'
import emoji from './/imgs/emoji.png'
const NoLiked = () => {
	return (
		<div className='p-40 m-20'>
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
		</div>
	)
}

export default NoLiked
