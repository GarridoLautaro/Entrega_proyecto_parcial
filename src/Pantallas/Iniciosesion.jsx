import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Select_act from "../Formulario/Actividad";
import Botones from "../Formulario/botones";
import Inputs from "../Formulario/Inputs";
import Navbar from './navbar';
import Footer from './footer';

export default function Iniciosesion() {
    const edad = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27","28", "29", "30", "31", "32", "33", "34", "35", "36", "37","38", "39", "40", "41", "42", "43", "44", "45", "46", "47","48", "49", "50", "51", "52", "53", "54", "55", "56", "57","58", "59", "60", "61", "62", "63", "64", "65", "66", "67","68", "69", "70", "71", "72", "73", "74", "75", "76", "77","78", "79", "80", "81", "82", "83", "84", "85", "86", "87","88", "89", "90", "91", "92", "93", "94", "95", "96", "97","98", "99", "100"];
    const empleo = ["carpinteria", "soldadura", "ingenieria", "mecanico"];

    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || clave.trim() === "") {
        alert("Por favor ingresa usuario y contraseña");
        return;
    }
    navigate("/", { state: { nombre } });
};

    return (
        <>
        <Navbar />

            <div className="form-container">
                <fieldset>
                    <form onSubmit={handleSubmit}>

                        <div>
                            <Inputs titulo="Ingrese su usuario" type="text" name="edad" clave="eda"/>
                            <Select_act tit="edad" act="eda" opciones={edad} />
                            <Inputs titulo="Ingrese su Nombre" type="text" name="nombre" clave="nom" valor={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <Inputs titulo="Correo" type="email" name="email" clave="correo"/>
                            <Inputs titulo="Ingrese su contraseña" type="password" name="clave" clave="contra" valor={clave} onChange={(e) => setClave(e.target.value)}/>
                        </div>

                        <div>
                            <Select_act tit="Seleccione un empleo" act="emp"  opciones={empleo} />
                        </div>

                        <div>
                            <Botones />
                            <ul>
                                <li><Link to="/registro">Si no tienes cuenta registrate aquí</Link></li>
                                <li><Link to="/">Ir a Inicio</Link></li>
                            </ul>
                        </div>

                        <br />
                    </form>
                </fieldset>
            </div>

        <Footer />
    </>
    );
}
