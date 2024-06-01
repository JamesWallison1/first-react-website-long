import FooterComp from "../../Components/FooterComp/FooterComp.jsx";
import CopyRight from "../../Components/CopyRightComp/CopyRight.jsx";
import './ContactPage.css'

function ContactPage(){
    return(
        <>
            <div className="contact-page-container">
                <FooterComp/>
                <CopyRight/>
            </div>
        </>
    );
}

export default ContactPage