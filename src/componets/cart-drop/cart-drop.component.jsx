import React from 'react';
import CustomButton from '../custom-button/custon-button.componet';
import './cart-drop.style.scss';

const CartDrop = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT </CustomButton>

    </div>
);

export default  CartDrop;