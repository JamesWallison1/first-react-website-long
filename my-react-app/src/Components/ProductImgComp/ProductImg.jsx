import './ProductImg.css'
import React, {useState} from 'react'
import arrow from "../../assets/Images/Arrow.png";


function ProductImg(props){
    const [isHovered, setIsHovered] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    function handleHoverState(){
        setIsHovered(!isHovered);
        setIsLocked(!isLocked);
    }

    return(
        <>
            <div 
                className="image-container" 
                onMouseEnter={handleHoverState} 
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={props.url} alt={props.alt}></img>
                {isHovered && (
                    <div className="to-hover-product-img">
                        <p className="to-hover-product-img-alt">{props.alt}</p>
                        <div className="arrow-pointing-image">
                            <img src={arrow} alt="Arrow" className='arrow-pointing'></img>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default ProductImg