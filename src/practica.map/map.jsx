
function Map ({opciones ,titulo_label}) {
    return (
        <>
        <label htmlFor="titulo_select"> {titulo_label} </label>
        <select name="sel" id="titulo_select">
        {opciones.map((opcion, index) => (
            <option key={index} value={opcion}>
            {opcion}
            </option>
        ))}
        </select>
        </>
    );
}

export default Map;