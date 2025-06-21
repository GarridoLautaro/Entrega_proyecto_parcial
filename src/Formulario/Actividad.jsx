function Select_act({act, tit, opciones }) {
    return (
        <>
            <label htmlFor="actividad">{tit}</label>
            <br />
            <select id={act} name="actividades">
                {opciones.map((opcion, index) => (
                <option key={index} value={opcion.toLowerCase()}>
                    {opcion}
                </option>
            ))}
            </select>
        </>
    );
}

export default Select_act;