
import Inputss from "./inputss";
import Map from "./map";
function Principal () {
    const paises = ["Brazil", "Hungria", "Bulgaria", "Rumania"]
    const continentes = ["America", "Europa", "Oceania", "Asia"]

    return (
        <>
        <div>
            <fieldset>
                <form>
                <Inputss titulo = "titulo principal" tipo = "text" />
                <Inputss titulo = "titulo secundario" tipo = "text" />
                <Inputss titulo = "titulo terciario" tipo = "text" />
                <Map titulo_label="Seleccione un pais" opciones = {paises} />
                <Map titulo_label="Seleccione un continente" opciones = {continentes} />
                </form>
            </fieldset>
        </div>
        </>
    );
}

export default Principal;