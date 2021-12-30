import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

import prod1 from '../images/image-product-1.jpg'
import prod2 from '../images/image-product-2.jpg'
import prod3 from '../images/image-product-3.jpg'
import prod4 from '../images/image-product-4.jpg'

import p1thumb from '../images/image-product-1-thumbnail.jpg'
import p2thumb from '../images/image-product-2-thumbnail.jpg'
import p3thumb from '../images/image-product-3-thumbnail.jpg'
import p4thumb from '../images/image-product-4-thumbnail.jpg'

import close from '../images/icon-close.svg';
import { useState } from "react";

let main = [prod1, prod2, prod3, prod4];
let thumbs = [p1thumb, p2thumb, p3thumb, p4thumb];

let itemDesc = {
    id: 1,
    company: 'Sneaker Company',
    productTitle: 'Fall Limited Edition Sneakers',
    productDescription: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
    discountedPrice: '$125.00',
    discount: '50%',
    price: '$250.00'
}

const Product = () => {
    
    const [lightboxStatus, setLightboxStatus] = useState(false);

    return (
        <div className="productContainer">
            <ProductImages main={main} thumbs={thumbs}
            sendToParent={ val  => setLightboxStatus(val)}
            />
            <ProductDetails item={itemDesc}/>    
            <div className={!lightboxStatus ? 'hidden lbg' : 'lbg'} >
            </div>
            <img id="closelbx" src={close} className={!lightboxStatus ? 'hidden' : ''} onClick={() => setLightboxStatus(false)}/>
            <ProductImages main={main} thumbs={thumbs} className='lightbox' status={lightboxStatus} 
            sendToParent={ val  => setLightboxStatus(val)}
            />
        </div>
    )
}

export default Product;