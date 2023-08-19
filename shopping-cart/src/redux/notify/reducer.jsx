import { ADD_TO_CART, UPDATE_CART, DELETE_PRODUCT } from "../constant"

const notifyReducer = (state , action) => {
    switch(action.type) {
        case ADD_TO_CART :
            state =  ADD_TO_CART
            return  state
        case UPDATE_CART :
            state =  UPDATE_CART
            return  state
        case DELETE_PRODUCT :
            state =  DELETE_PRODUCT
            return  state
        default :
            return state = '';
    }
}

export default notifyReducer