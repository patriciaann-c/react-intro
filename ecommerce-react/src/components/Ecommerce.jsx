export default function Ecommerce() {
    const products = [
        {
            id: 1,
            name: "Smartphone Samsung",
            price: 599.99,
        },
        {
            id: 2,
            name: "Laptop Lenovo",
            price: 899.99,
        },
        {
            id: 3,
            name: "Cuffie Bluetooth",
            price: 79.99,
        },
        {
            id: 4,
            name: "Smartwatch",
            price: 149.99,
        },
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">I Nostri Prodotti</h2>

            <div className="row">
                {products.map((product) => (
                    <div className="col-md-6 col-lg-3 mb-4" key={product.id}>

                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.name}</h5>

                            <p className="card-text fs-5 text-success">
                                € {product.price.toFixed(2)}
                            </p>

                            <button className="btn btn-primary mt-auto">
                                Aggiungi al carrello
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}