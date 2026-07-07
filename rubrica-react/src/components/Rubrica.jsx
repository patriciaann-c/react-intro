export default function Rubrica() {
    const contacts = [
        {
            name: "Mario Rossi",
            phone: "333 1234567",
            email: "mario.rossi@gmail.com",
        },
        {
            name: "Giulia Bianchi",
            phone: "347 9876543",
            email: "giulia.bianchi@gmail.com",
        },
        {
            name: "Luca Verdi",
            phone: "320 4567891",
            email: "luca.verdi@gmail.com",
        },
        {
            name: "Anna Neri",
            phone: "339 1122334",
            email: "anna.neri@gmail.com",
        },
    ];

    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Rubrica Telefonica</h2>

                <div className="row">
                    {contacts.map((contact, index) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={index}>
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{contact.name}</h5>

                                    <p className="card-text">
                                        <strong>Telefono:</strong><br />
                                        {contact.phone}
                                    </p>

                                    <p className="card-text">
                                        <strong>Email:</strong><br />
                                        {contact.email}
                                    </p>

                                    <button className="btn btn-primary">
                                        Chiama
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}