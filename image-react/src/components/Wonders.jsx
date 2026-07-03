function Wonders() {

    const wonders = {
        palawan: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hills: "https://images.unsplash.com/photo-1515511210479-bc02c48ec763?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMGhpbGxzfGVufDB8fDB8fHww",
        terrace: "https://plus.unsplash.com/premium_photo-1674864875568-374ab9e9dcbc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGUlMjBUZXJyYXp6ZSUyMGRpJTIwUmlzbyUyMGRpJTIwQmFuYXVlfGVufDB8fDB8fHww",
        boracay: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yYWNheXxlbnwwfHwwfHx8MA%3D%3D"
    }

    return (
        <>
            <div className="card" style={{ width: "18rem;" }}>
                <img src={wonders.palawan} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Palawan</p>
                </div>
            </div>
            <br />
            <div className="card" style={{ width: "18rem;" }}>
                <img src={wonders.hills} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Chocolate Hills</p>
                </div>
            </div>
            <br />
            <div className="card" style={{ width: "18rem;" }}>
                <img src={wonders.terrace} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Rice's Terrace</p>
                </div>
            </div>
            <br />
            <div className="card" style={{ width: "18rem;" }}>
                <img src={wonders.boracay} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Boracay</p>
                </div>
            </div>
        </>
    )
}

export default Wonders