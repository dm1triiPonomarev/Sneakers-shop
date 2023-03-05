import { combineReducers, createStore } from "redux";
import { BuyLogicReducer } from "./Reducers/BuyLogicReducer";
import { LikeReducer } from "./Reducers/LikeReducer";
import { Modalreducer } from "./Reducers/ModalReducer";
import { OrderCashReducer } from "./Reducers/OrderCashReducer";

const rootReducer = combineReducers({
	like: LikeReducer,
	cash: OrderCashReducer,
	modal: Modalreducer,
	orderItems: BuyLogicReducer,


})

export const store = createStore(rootReducer)