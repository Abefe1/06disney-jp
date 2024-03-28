function Cards(props){

    const {image, name, description, info}=props
    
    
    return(
        <>

        <div className='cards'>
            <div className="imageBox">
                <img src={image} alt={name} />
            </div>
            <div className="textBox">
            <div className="info1"><p>{name}</p>
            <p>{description}</p></div>
            <div className="info2">
            <p>{info}</p>
            </div>
            </div>
        </div>

    
        </>
    )
}

export default Cards