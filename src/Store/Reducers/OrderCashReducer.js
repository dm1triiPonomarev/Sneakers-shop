
const defaultState = {
	orderPrice: 0
}

const INCREMENT_CASH = 'INCREMENT_CASH'
const DECREMENT_CASH = 'DECREMENT_CASH'
const NULL_CASH = 'NULL_CASH'

export const OrderCashReducer = (state = defaultState, action) => {
	switch (action.type) {
		case INCREMENT_CASH:
			return { ...state, orderPrice: state.orderPrice + action.payload }
		case DECREMENT_CASH:
			return { ...state, orderPrice: state.orderPrice - action.payload }

		case NULL_CASH:
			return { ...state, orderPrice: 0 }
		default:
			return state
	}
}

export const Buy = (payload) => ({ type: INCREMENT_CASH, payload })
export const CancelBuy = (payload) => ({ type: DECREMENT_CASH, payload })
export const NullCash = () => ({ type: NULL_CASH })

