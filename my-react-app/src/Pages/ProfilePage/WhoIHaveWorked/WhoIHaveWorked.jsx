import './WhoIHaveWorked.css'

function WhoIHaveWorked(props){
    return(
        <>
            <div className="WhoIHaveWorked-container">
                <img src={props.url} alt={props.alt} style={props.cssStyle}></img>
            </div>
        </>
    );
}

export default WhoIHaveWorked