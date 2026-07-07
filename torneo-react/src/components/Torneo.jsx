export default function Torneo() {

    const partecipanti = [
        {
            nome: "Mario",
            punti: 120,
            vincite: 5,
            perdite: 3
        },
        {
            nome: "Luigi",
            punti: 80,
            vincite: 2,
            perdite: 7
        },
        {
            nome: "Peach",
            punti: 69,
            vincite: 2,
            perdite: 2
        }]

    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Classifica Torneo</h2>

                <div className="row">
                    {partecipanti.map((partecipanti, index) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={index}>
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    <h4 className="card-title">{partecipanti.nome}</h4>
                                    <hr />

                                    <p><strong>Punteggio:</strong> {partecipanti.punti}</p>
                                    <p><strong>Vittorie:</strong> {partecipanti.vincite}</p>
                                    <p><strong>Sconfitte:</strong> {partecipanti.perdite}</p>

                                    <span className="badge bg-success">
                                        Posizione #{index + 1}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}