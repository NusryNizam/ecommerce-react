import AddToCart from './AddToCart'

const ProductDetails = ( { item }) => {
    return (
        <div className='detailsContainer'>
            <p>{item.company}</p>
            <h1>{item.productTitle}</h1>
            <p>{item.productDescription}</p>
            <h2>{item.discountedPrice}<span>{item.discount}</span></h2>
            <h4>{item.price}</h4>
            <AddToCart toAdd={{id: item.id, title: item.productTitle, price: item.discountedPrice}}/>
        </div>
    )
}

export default ProductDetails;