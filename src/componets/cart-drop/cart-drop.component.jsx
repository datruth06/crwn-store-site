import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custon-button.componet';
import CartItem from '../cart-item/cart-item.componets';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-drop.style.scss';


const CartDrop = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'> 
            {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT </CustomButton>

    </div>
);

const mapStateToprops = state => ({
    cartItems: selectCartItems(state)

});

export default connect(mapStateToprops)  (CartDrop);