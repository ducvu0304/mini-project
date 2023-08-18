import { ADD_TO_CART, DELETE_PRODUCT, UPDATE_CART } from '../constant'


export const addToCart = (id, quantity) => ({
    type : ADD_TO_CART,
    id,
    quantity
})

export const updateCart = (id, quantity) => ({
    type : UPDATE_CART,
    id,
    quantity
})

export const deleteProduct = (id) => ({
    type : DELETE_PRODUCT,
    id
})



