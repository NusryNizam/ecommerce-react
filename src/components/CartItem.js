import thumb from '../images/image-product-1-thumbnail.jpg'
import trashIcon from '../images/icon-delete.svg'

const CartItem = (props) => {
    const {deleteItem, product, idx} = props;
    return (
        <div className='singleItem' key={idx}>
            <img src={thumb} width='50px' />
            <p>{product.title}
                <br />
                {product.price} x {product.qty} <strong>${Number(product.price) * Number(product.qty)}</strong>
            </p>
            <img src={trashIcon} className='deleteIcon'
                onClick={() => deleteItem(product.id)}
            />
        </div>
    )
}

export default CartItem;