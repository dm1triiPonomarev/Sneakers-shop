
const defaultState = {
	liked: []
}

export const LIKE = "LIKE"
export const DISLIKE = "DISLIKE"

export const LikeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case LIKE:
			return { ...state, liked: [...state.liked, action.payload] }
		case DISLIKE:
			return { ...state, liked: state.liked.filter(item => item.id !== action.payload) }
		default:
			return state
	}

}


export const Like = (payload) => ({ type: LIKE, payload })
export const Dislike = (payload) => ({ type: DISLIKE, payload })
