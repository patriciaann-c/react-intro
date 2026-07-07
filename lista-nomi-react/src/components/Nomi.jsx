export default function Nomi() {

    const nomi = ["mario", "luigi", "peach", "yoshi", "toad"]
    return (

        <>
            <ul>
                {nomi.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
        </>
    )
}