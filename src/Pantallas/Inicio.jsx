import { useLocation } from "react-router-dom";
import '../App.css';
import Navbar from './navbar';
import Footer from './footer';

export default function Inicio() {
    const location = useLocation();
    const nombre = location.state?.nombre;

    return (
        <>
        <Navbar />

        <div className="page-content">
            {nombre ? (
                <h2>¡Bienvenido, {nombre}!</h2>
            ) : (
                <h2>Bienvenido al Inicio</h2>
            )}
            <br />
            <p>En este proyecto desarrollamos dos formularios dinámicos: uno de registro y otro de inicio de sesión. Ambos permiten al usuario interactuar con la aplicación ingresando datos personalizados como nombre, correo, contraseña, edad y ocupación, los cuales se gestionan mediante React con estados y componentes reutilizables.</p>
            <br />
            <p>El formulario de registro permite al usuario crear una cuenta completando sus datos personales. Incluye campos como nombre, teléfono, contraseña, notas y un selector de empleo. Todos estos datos son capturados y validados antes de realizar la acción de redireccionamiento.</p>
            <br />
            <p>Por otro lado, el formulario de inicio de sesión solicita únicamente el nombre de usuario y la contraseña. Si los campos están completos, redirige al usuario a la página principal, mostrando un mensaje de bienvenida personalizado utilizando el nombre ingresado en el formulario.</p>
            <br />
            <p>Ambos formularios están conectados al sistema de rutas de React Router, lo que nos permitió redirigir correctamente según la acción del usuario. Además, implementamos el paso de datos entre páginas utilizando el objeto `state` del navegador, lo que permitió mantener la información del usuario entre componentes.</p>
        </div>

        <Footer />
        </>
    );
}
