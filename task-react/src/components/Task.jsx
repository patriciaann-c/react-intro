export default function Task() {

    const tasks = [
        {
            title: "Studiare React",
            completed: true,
        },
        {
            title: "Completare il progetto",
            completed: false,
        },
        {
            title: "Fare la spesa",
            completed: true,
        },
        {
            title: "Andare in palestra",
            completed: false,
        },
    ]

    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Task list</h2>

                <div className="row">
                    {tasks.map((task, index) => (
                        <div className="col-md-6 col-lg-3 mb-3" key={index}>
                            <div
                                className={`card ${task.completed ? "border-success" : "border-danger"
                                    }`}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">{task.title}</h5>

                                    <p>
                                        Stato:{" "}
                                        {task.completed ? (
                                            <span className="badge bg-success">Completata</span>
                                        ) : (
                                            <span className="badge bg-danger">Da svolgere</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}