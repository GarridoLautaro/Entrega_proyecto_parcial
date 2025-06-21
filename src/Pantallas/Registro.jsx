import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Select_act from "../Formulario/Actividad";
import Botones from "../Formulario/botones";
import Inputs from "../Formulario/Inputs";
import Navbar from './navbar';
import Footer from './footer';

export default function Registro() {
    const actividades = ["carpinteria", "soldadura", "ingenieria", "mecanico"];

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
                            <Inputs titulo="Ingrese su Nombre" type="text" name="nom" clave="nombre_registro" valor={nombre} onChange={(e) => setNombre(e.target.value)}/>
                            <Inputs titulo="Ingrese su Telefono" type="tel"name="tel" clave="telefono"/>
                            <Inputs titulo="Ingrese su contraseña" type="password" name="con" clave="contraseña" valor={clave} onChange={(e) => setClave(e.target.value)}/>
                            <Inputs titulo="Correo" type="email" name="email" clave="correo"/>
                            <Inputs titulo="Notas" type="text" name="notas" clave="not"/>
                        </div>
                        <div>
                            <Select_act tit="Seleccione un empleo" act="empleo" opciones={actividades} />
                        </div>
                        <div>
                            <Botones />
                            <ul>
                                <li><Link to="/login">Si tienes una cuenta inicia sesión aquí</Link></li>
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
