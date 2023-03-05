
const defaultState = {
	isModal: false
}

const SET_MODAL = "SET_MODAL"
const REMOVE_MODAL = "REMOVE_MODAL"

export const Modalreducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_MODAL:
			return { ...state, isModal: true }
		case REMOVE_MODAL:
			return { ...state, isModal: false }
		default:
			return state
	}
}


export const setModal = () => ({ type: SET_MODAL })
export const removeModal = () => ({ type: REMOVE_MODAL })