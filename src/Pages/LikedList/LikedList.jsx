import React from 'react'
import { useSelector } from 'react-redux'
import HasLiked from './HasLiked'
import NoLiked from './NoLiked'



const LikedList = () => {
	const LikedArr = useSelector(state => state.like.liked)

	return (
		<div >
			{LikedArr.length > 0 ?
				<HasLiked LikedArr={LikedArr} />
				: <NoLiked />
			}
		</div>
	)
}

export default LikedList
