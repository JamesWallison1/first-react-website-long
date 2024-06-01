import './About.css'


function About(props){
    return(
        <>
            <div className="about-container">
                <p className='about-para'>{props.para}</p>
                <h1 id='h1-para'>{props.h1P}</h1>
            </div>
        </>
    );
}

export default About