import { useState, useEffect } from 'react';

import rightArrow from '../images/icon-next.svg';
import leftArrow from '../images/icon-previous.svg';


const ProductImages = (props) => {
    const { main, thumbs, className, status } = props

    const [activeImage, setActiveImage] = useState(main[0]);
    const [activeSelection, setActiveSelection] = useState(thumbs[0]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setActiveImage(main[count]);
        setActiveSelection(thumbs[count])
    }, [count])

    const handleNext = () => {
        setCount(count + 1);

    }

    const handlePrevious = () => {
        setCount(count - 1);
    }


    let hidden = className ? ' hidden' : '';
    let lightboxStatus = status;

    return (
        <div
            className={!lightboxStatus ? `imgContainer ${hidden}` : `${className} imgContainer`}
        >
            <img className='mainImage' src={activeImage} alt="main" width="100%"
                onClick={() => props.sendToParent(lightboxStatus ? true : true)}
            />
            <button 
                className={lightboxStatus ? 'lbxArrows' : 'lbxArrows hidden'}
                id="leftLbxArrow" 
                onClick={handlePrevious}
                disabled={count >= 1 ? false : true}
            >
                <img src={leftArrow} alt="previous-image" />
            </button>

            <button 
                className={lightboxStatus ? 'lbxArrows' : 'lbxArrows hidden'}
                id="rightLbxArrow" 
                onClick={handleNext}
                disabled={count < main.length - 1 ? false : true}
            >
                <img src={rightArrow} alt="next-image" />
            </button>

            <button className='arrows' id="leftArrow" onClick={handlePrevious}
                disabled={count >= 1 ? false : true}
            >
                <img src={leftArrow} alt="previous-image" />
            </button>
            <button className='arrows' id="rightArrow" onClick={handleNext}
                disabled={count < main.length - 1 ? false : true}
            >
                <img src={rightArrow} alt="next-image" />
            </button>

            <div className="thumbs">
                {thumbs.map((thumb, index) => {
                    return (
                        <img src={thumb} key={thumb} alt={thumb} className={activeSelection == thumb ? 'selected thumbImages' : 'thumbImages'} width="80px" 
                        onClick={() => {
                            setActiveImage(main[index]);
                            setCount(index);
                            setActiveSelection(thumbs[index]);
                        }} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImages;