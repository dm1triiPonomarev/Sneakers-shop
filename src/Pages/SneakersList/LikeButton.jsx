import React, { useState } from 'react'

function LikeButton(item) {
	const [isActive, setIsActive] = useState(false)
	function setActive() {
		item.item.liked = true
	}
	function resetActive() {
		item.item.liked = false
	}


	return (
		<>
			{
				item.item.liked === true
					?
					<button onClick={() => { setIsActive(false); resetActive() }} className={'card-like-btn'}>
						<img src={'/img/likedActive.svg'} alt="like" />
					</button>
					:
					<button onClick={() => { setIsActive(true); setActive() }} className={'card-unlike-btn'}>
						<img src={'/img/unlike.svg'} alt="unlike" />
					</button>
			}
		</>
	)
}

export default LikeButton
