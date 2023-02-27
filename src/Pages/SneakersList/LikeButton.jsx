import React, { useState } from 'react'
import active from './/imgs/likedActive.svg'
import unliked from './/imgs/unlike.svg'


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
						<img src={active} alt="like" />
					</button>
					:
					<button onClick={() => { setIsActive(true); setActive() }} className={'card-unlike-btn'}>
						<img src={unliked} alt="unlike" />
					</button>
			}
		</>
	)
}

export default LikeButton
