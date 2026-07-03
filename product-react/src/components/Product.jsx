function Product() {

    const pc = {
        name: "BREUNOR PROJECT ZERO",
        description: "PC Gaming Ryzen 7 7800X3D, RTX 5070 12GB, RAM 32GB DDr5 6000MHz, SSD 1000GB NVMe, AIO 360mm, Windows 11",
        price: 2700,
        discount: 20,
        img: "https://breunor.com/cdn/shop/files/rossa_5cec4a8e-419c-461f-a6c2-fd9a888e28c2.jpg?v=1765444305&width=900",

    }

    const totPrice = pc.price - (pc.price * pc.discount) / 100;

    return (
        <>
            <div className="card" style={{ width: "18rem;" }}>
                <img src={pc.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{pc.name}</h5>
                    <p className="card-text">{pc.description}</p>
                    <h6 className="card-text">Prezzo:
                        <span className="text-decoration-line-through">€{pc.price}</span>
                    </h6>
                    <p>
                        <strong>Sconto: </strong> {pc.discount} %
                    </p>
                    <h6>Prezzo finale: €{totPrice.toFixed(2)}</h6>

                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </>
    )
}

export default Product