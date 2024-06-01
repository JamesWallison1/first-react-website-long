import './CopyRight.css'


function CopyRight(){
    return(
        <>
            <div className="copy-right-container">
                <div className="left-copy-right-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" preserveAspectRatio="xMidYMid slice" style={{width: '100%', height: '100%', transform: "translate3d('0px', '0px', '0px')"}}><defs><clipPath id="__lottie_element_2"><rect width="800" height="800" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_2)"><g transform="matrix(0.9988802671432495,0.04730923846364021,-0.04730923846364021,0.9988802671432495,400,400)" opacity="1" style={{display: 'block'}}><path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(0,0,0)" strokeOpacity="1" d=" M-243.26100158691406,-243.22900390625 C-243.26100158691406,-243.22900390625 243.26100158691406,243.22900390625 243.26100158691406,243.22900390625 M-243.22999572753906,243.25999450683594 C-243.22999572753906,243.25999450683594 243.22999572753906,-243.26100158691406 243.22999572753906,-243.26100158691406 M-344.0010070800781,0.02199999988079071 C-344.0010070800781,0.02199999988079071 344.0010070800781,-0.02199999988079071 344.0010070800781,-0.02199999988079071 M-0.02199999988079071,-344 C-0.02199999988079071,-344 0.02199999988079071,344 0.02199999988079071,344"></path></g></g></svg>

                    <p>&copy; Oli Harris {new Date().getFullYear()}</p>
                </div>

                <div className="right-copy-right-container">
                    <div>Twitter</div>
                    <div>Linkedin</div>
                    <div>Mail</div>
                </div>
            </div>
        </>
    );
}

export default CopyRight