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
                <table>
                    <tr>
                        <td>{
                            props.cart.map((cart => {
                                return <li>Name: {cart.name}</li>
                            }))
                        }
                        </td>
                    </tr>
                </table>
                <p>Total:{total}</p>
                <button>Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;