export default function Todolist() {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                    <label className="form-check-label" for="firstCheckbox">Preparare la colazione</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                    <label className="form-check-label" for="secondCheckbox">Studiare</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                    <label className="form-check-label" for="thirdCheckbox">Lavorare</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                    <label className="form-check-label" for="thirdCheckbox">Dare da mangiare al cane</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                    <label className="form-check-label" for="thirdCheckbox">Innaffiare le piante</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                    <label className="form-check-label" for="thirdCheckbox">Prelevare i soldi</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                    <label className="form-check-label" for="thirdCheckbox">Riposarsi</label>
                </li>
            </ul>
        </>
    )
}