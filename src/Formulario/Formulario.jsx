import Select_act from "./Actividad";
import Botones from "./botones";
import Inputs from "./Inputs";

function Formulario() {
    const actividades = ["Apuestas", "Casino", "Timba", "Apuestas deportivas", "Seguir timbeando"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

    return (
    <>
    <div className="form-container">
        <fieldset>
            <form>
                <div>
                    <Select_act tit=" Seleccione un mes " opciones={meses}/>
                    <Inputs titulo="¿Que dia es hoy?"/>
                    <br></br>
                    <Inputs titulo="¿Que hiciste hoy?"/>
                </div>
                <br></br>
                <div>
                <Select_act 
                    tit="seleccione una actividad"
                    opciones={actividades}
                />
                </div>
                <br></br>
                <div>
                    <Botones />
                </div>
                <br></br>
            </form>
        </fieldset>
    </div>
    </>
    );
}

export default Formulario;