function Data() {

    const user = {
        name: "Patricia Ann Comendador",
        occupation: "AI web developer",
        address: "Via Scorpione 6",
        email: "ciao.011@gmail.com",
        citizenship: "Japanese"
    }

    return (
        <>
            <div className="card" style={{ width: "18rem;" }}>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{user.occupation}</h6>
                    <p className="card-text">{user.address}</p>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.citizenship}</p>
                </div>
            </div>
        </>
    )
}

export default Data