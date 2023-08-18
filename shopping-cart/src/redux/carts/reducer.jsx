import { ADD_TO_CART, DELETE_PRODUCT, UPDATE_CART} from "../constant"

const products = JSON.parse(localStorage.getItem('products'))
const initialState = JSON.parse(localStorage.getItem('carts')) || []

const checkProductInCart = (id, arr) => {
    if (arr.length > 0) {
        for(let i in arr) {
            if(arr[i].productId === id) {
                return true
            }
        }
        return false
    }else {
        return false
    }
}

const getProductInCart = (id, arr) => {
    for(let i in arr) {
        if(arr[i].productId === id) {
            return arr[i]
        }
    }
}

const cartsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART : {
            if(checkProductInCart(action.id, state)) {
                for (let i in state) {
                    if(state[i].productId === action.id) {
                        let quantity = +action.quantity
                        state[i].quantity += quantity
                        localStorage.setItem('carts', JSON.stringify(state))
                    }
                }
                return [...state]
            }else {
                let product = products.filter(item => (item.productId === action.id))
                product[0].quantity = action.quantity
                localStorage.setItem('carts', JSON.stringify([...state, ...product]))
                return [...state, ...product]
            }     
        }
        case UPDATE_CART : {
            let product = getProductInCart(action.id, state)
            product.quantity = action.quantity
            return [...state]
        }
        case DELETE_PRODUCT: {
            const newState = state.filter(item => item.productId !== action.id)
            localStorage.setItem('carts', JSON.stringify(newState))
            return newState;
        }
        default : 
            return state
    }

}

export default cartsReducer