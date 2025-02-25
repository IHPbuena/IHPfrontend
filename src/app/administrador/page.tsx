import Buscar from '../../components/Buscar';
import { Provider } from "@/components/ui/provider"


import React from "react";
import {Avatar} from "@/components/ui/avatar";
import "@/styles/global.css";
import "../../../public/icono.jpg"


export default function pagina(){

    return (
            <div>
                {/* Encabezado */}
                <header style={{ margin: 0, padding: 0 }}>
                    <div className="encabezado">
                        <Provider>
                            <div className="avatar-container">
                                <h3 className="colornegro">Admin</h3>
                                <Avatar src="icono.jpg"/>
                            </div>
                        </Provider>
                    </div>
                </header>

                {/* Contenido principal */}
                <main style={{ margin: 0, padding: 0 }}>
                    <h1 className="colornegro">Bienvenido a la página de ticketing de IHP</h1>
                    <h4 className="colornegro">Usted es ahora mismo administrador</h4>
                </main>

                {/* Otro contenido */}
                <div>
                    <h2><Buscar /></h2>
                </div>
            </div>
        );
    }
