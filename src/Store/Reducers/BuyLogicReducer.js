
const defaultState = {
	orderList: [],
	boughtList: [],

}

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const IS_BOUGHT = 'IS_BOUGHT'
const CANCEL_IS_BOUGHT = 'CANCEL_IS_BOUGHT'
const ADD_BOUGHT_LIST = 'ADD_BOUGHT_LIST'

export const BuyLogicReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, orderList: [...state.orderList, action.payload] }

		case DELETE_ITEM:
			return { ...state, orderList: state.orderList.filter(item => item.id !== action.payload) }

		case IS_BOUGHT:
			return { ...state, isBought: true }

		case CANCEL_IS_BOUGHT:
			return { ...state, isBought: false, orderList: [] }

		case ADD_BOUGHT_LIST:
			return { ...state, boughtList: [...state.boughtList, action.payload] }
		default:
			return state
	}
}


export const AddItem = (payload) => ({ type: ADD_ITEM, payload })
export const DeleteItem = (payload) => ({ type: DELETE_ITEM, payload })

export const IsBought = () => ({ type: IS_BOUGHT })
export const CancelIsBought = () => ({ type: CANCEL_IS_BOUGHT })

export const AddBoughtList = (payload) => ({ type: ADD_BOUGHT_LIST, payload })