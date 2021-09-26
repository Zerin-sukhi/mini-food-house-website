import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const { cart } = props;
    let total = 0;
    for (const food of cart) {
        total = total + food.price;
    }

    return (
        <div className="cart">
            <div>
                <h2>Todays Sell</h2>
                <h4>Ordered food:{props.cart.length}</h4>
                <p><small>Food Name:{cart.name}</small></p>
                <p>Total:{total}</p>
                <button>Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;