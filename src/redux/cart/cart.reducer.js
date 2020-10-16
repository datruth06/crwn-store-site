import CartActionTypes from './cart.types';
import {AddItemToCart, removeItemsFormCart} from './cart.utils';

const INITAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITAL_STATE, action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
                };

        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemsFormCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default cartReducer;