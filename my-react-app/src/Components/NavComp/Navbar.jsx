import React, {useState} from 'react'
import './Navbar.css'
import star from '../../assets/Images/theStar.svg'
import { Link } from 'react-router-dom';


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
                <Link to="/"><div onClick={setPosHome}>Home</div></Link>
                <Link to="/profile"><div onClick={setPosProfile}>Profile</div></Link>
                <Link to="/contact"><div onClick={setPosContact}>Contact</div></Link>
            </div>

            <footer className="shop">
                <img src={star} alt="Star"></img>
                <span>Shop</span>
            </footer>
        </>
    );
}

export default Navbar