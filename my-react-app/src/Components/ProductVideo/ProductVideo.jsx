import './ProductVideo.css';
import React, {useState} from 'react';
import arrow from "../../assets/Images/Arrow.png";

function ProductVideo(props){
    const [isHovered, setIsHovered] = useState(false);

    return(
        <>
            <div className="video-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <video src={props.videoUrl} type='video/mp4' autoPlay loop muted playsInline></video>
                {isHovered && (
                    <div className="to-hover-product-video">
                        <p className="to-hover-product-video-alt">{props.alt}</p>
                        <div className="arrow-pointing-image">
                            <img src={arrow} alt="Arrow" className='arrow-pointing'></img>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductVideo