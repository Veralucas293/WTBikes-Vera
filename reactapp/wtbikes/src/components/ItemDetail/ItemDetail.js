const ItemDetail =({ price,img,name,description }) => {
    return(
        <div>
            <h2>Detalle del producto</h2>
            <picture>
                <img src={img} alt={name}/>
            </picture><br/>
            {name}
            <br></br>
            {description}
            <br/>
            {price}
        </div>
        )
}

export default ItemDetail