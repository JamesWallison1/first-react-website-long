import React, {useState} from 'react'
import './Navbar.css'
import star from '../../assets/Images/theStar.svg'


function Navbar(){
    const [section, setSection] = useState([{
        left: "0px",
    }]);

    function setPosProfile(){
        setSection({
            left: "100px",
        });
    }

    function setPosContact(){
        setSection({
            left: "206px",
        });
    }

    function setPosHome(){
        setSection({
            left: "5px",
        });
    }

    return(
        <>
            <div className="navbar-container" style={{'--left': section.left}}>
                <div onClick={setPosHome}>Home</div>
                <div onClick={setPosProfile}>Profile</div>
                <div onClick={setPosContact}>Contact</div>
            </div>

            <footer className="shop">
                <img src={star} alt="Star"></img>
                <span>Shop</span>
            </footer>
        </>
    );
}

export default Navbar