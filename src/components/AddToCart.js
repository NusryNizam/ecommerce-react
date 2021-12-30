import { useEffect, useState } from 'react';
import { useDetails } from '../context';

import cartIcon from '../images/icon-cart.svg'
import iconMinus from '../images/icon-minus.svg';
import iconPlus from '../images/icon-plus.svg';

const AddToCart = ({ toAdd }) => {

    let [qty, setQty] = useState(1);
    let [setProduct] = useDetails();

    useEffect(() => {
        toAdd.qty = qty;
    }, [qty])

    const increment = () => {
        if (qty > 99) {
            setQty(100);
        } else {
            setQty(qty + 1);
        }

    }
    const decrement = () => {
        if (qty == 0) {
            setQty(0);
        } else {
            setQty(qty - 1);
        }
    }

    const handleInput = (e) => {
        let input = Number(e.target.value);
        if (input > 100) {
            setQty(100);
        } else {
            setQty(input);
        }
    }

    const addItemToCart = () => {
        if (qty > 0) {
            setProduct(toAdd);
        }
    }

    return (
        <div className="addToCart">
            <div className="qty">
                <button onClick={decrement}>
                    <img src={iconMinus} alt="decrease" />
                </button>

                <input type="number" value={qty} min={0} max={100}
                    onChange={(e) => { handleInput(e) }}
                />

                <button onClick={increment}>
                    <img src={iconPlus} alt="increase" />
                </button>
            </div>
            <button id="btnAddToCart"
                onClick={addItemToCart}>
                <img src={cartIcon} alt="cart-icon" />
                Add to cart
            </button>
        </div>
    )
}

export default AddToCart;