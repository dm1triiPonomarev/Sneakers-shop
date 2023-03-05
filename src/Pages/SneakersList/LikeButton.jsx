import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dislike, Like } from '../../Store/Reducers/LikeReducer'
import active from './/imgs/likedActive.svg'
import unliked from './/imgs/unlike.svg'


function LikeButton({ item }) {
	const dispatch = useDispatch()
	const likedList = useSelector(state => state.like.liked)

	return (
		<>
			{
				likedList.filter(likedItem => likedItem.id === item.id).length > 0
					?
					<button onClick={() => { dispatch(Dislike(item.id)) }} className={'card-like-btn'}>
						<img src={active} alt="like" />
					</button>
					:
					<button onClick={() => { dispatch(Like(item)) }} className={'card-unlike-btn'}>
						<img src={unliked} alt="unlike" />
					</button>
			}
		</>
	)
}

export default LikeButton
