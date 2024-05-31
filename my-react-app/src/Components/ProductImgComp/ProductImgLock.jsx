import './ProductImg.css'
import lock from '../../assets/Images/lock.svg'
import React, {useState} from 'react'

function ProductImgLock(props){
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
                        <div className="left-to-hover-product-img">
                            <p className="to-hover-product-img-alt">{props.alt}</p>
                            <p className='to-hover-product-img-coming-soon'>Coming Soon</p>
                        </div>
                        <div className="lock-pointing-image">
                            <img src={lock} alt="Lock" className='lock-pointing'></img>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductImgLock