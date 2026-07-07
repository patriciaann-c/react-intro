export default function Array() {

    const colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    return (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {colors.map((color, index) => (
                <div key={index} style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color,
                    border: "1px solid black",
                    borderRadius: "8px"
                }}>

                </div>
            ))}
        </div>
    )
}