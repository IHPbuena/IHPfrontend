// src/pages/index.js
import FormularioInicioDeSesion from '../components/FormularioInicioDeSesion';  // Importa el componente Header

export default function Home() {
    return (
        <div>
            <FormularioInicioDeSesion />  {/* Usamos el componente Header aquí */}
            <h2>¡Gracias por visitar!</h2>
        </div>
    );
}
