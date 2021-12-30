import cart from '../images/icon-cart.svg'
import profile from '../images/image-avatar.png'
import CartItem from './CartItem';

import { useEffect, useState } from 'react';

import { useDetails } from '../context'


const Cart = () => {
    const [status, setStatus] = useState(false)
    const [details, setDetails] = useDetails();

    let products = [];

    if (details.id) {
        products.push(details);
        details.price = details.price.replace('$', '');
    }

    let deleteItem = (pid) => {
        products = products.filter(product => product.id != pid);
        setDetails(products)
    }


    return (
        <>
            <img id="cartImage" src={cart} alt="Cart"
                onClick={() => { setStatus(!status) }}
                className={status == false ? '' : 'dark'}
            />
            <div id="cartListContainer">
                <div id="camount"
                    className={products.length == 0 ? 'hidden' : ''}
                >{products.length > 0 ? products.length : ''}</div>

                <div className={status == false ? 'hidden modal' : 'modal'}
                    onClick={() => { setStatus(!status) }}
                ></div>
                <div id="cartList" className={status == false ? 'hidden' : ''}>
                    <h4>Cart</h4>
                    <hr />

                    {
                        products.length > 0 ? products.map((product) => {
                            return (
                                <CartItem deleteItem={() => deleteItem(product.id)} product={product} key={product.id} />
                            )
                        }) : <div id="noItem">Your cart is empty.</div>
                    }

                    <button
                        className={products.length == 0 ? 'btnPrimary hidden' : 'btnPrimary'}
                    >Checkout</button>
                </div>
            </div>
            <img id="avatar" src={profile} width="40px" alt="profile-pic" />
        </>
    )
}

export default Cart;