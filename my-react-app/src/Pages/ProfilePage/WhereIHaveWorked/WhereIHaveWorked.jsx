import './WhereIHaveWorked.css'


function WhereIHaveWorked(props){
    return(
        <>  
            <div className="WhereIHaveWorked-container">
                <p>{props.year}</p>
                <h1>{props.name}</h1>
                <p>{props.freelance}</p>
                <p className='about-para-working'>{props.para}</p>
            </div>
        </>
    );
}

export default WhereIHaveWorked