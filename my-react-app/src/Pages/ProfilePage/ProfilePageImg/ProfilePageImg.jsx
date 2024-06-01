function ProfilePageImg(props){
    return(
        <>
            <div className="image-container">
                <img src={props.url} alt={props.alt}></img>
            </div>
        </>
    );
}

export default ProfilePageImg