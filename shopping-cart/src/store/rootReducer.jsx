import productsReducer from "../redux/products/reducer"
import cartsReducer from '../redux/carts/reducer'
import notify from "../redux/notify/reducer"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    products: productsReducer,
    carts : cartsReducer,
    notify
})

export default rootReducer
