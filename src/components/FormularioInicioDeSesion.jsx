"use client";
import React, { useState } from 'react';
import '../styles/FormularioInicioDeSesion.css'; // Importamos el CSS
import { useRouter } from 'next/navigation';

function FormularioInicioDeSesion() {
    const router = useRouter();
    const [correousuario, setCorreousuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    // Guardamos el correo de usuario en el localStorage
    localStorage.setItem('correo', correousuario);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Enviamos las credenciales al backend
        const response = await fetch(`http://100.75.242.67:8080/InicioDeSesion?correousuario=${correousuario}&contrasena=${contrasena}`, {
            method: "GET",
            mode: "cors"
        });

        if (response.ok) {
            console.log('Datos enviados correctamente');
            console.log("Inicio de sesión exitoso");

            // Suponiendo que el backend responde con un objeto que contiene la URL para redirigir
            const redirectToPage = await response.text();

            // Aquí asumimos que el backend responde con un JSON
            if (redirectToPage) {
                // Si la respuesta contiene la URL de redirección, redirigimos al usuario
                router.push(redirectToPage);
            } else {
                // Si no hay una URL de redirección, podemos redirigir a una página predeterminada
                alert('No se especificó una página para redirigir.');
            }
        } else {
            console.error('Error al enviar los datos');
            const errorMessage = await response.text();
            console.error(errorMessage);
            alert("Error al iniciar sesión: " + errorMessage);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Inicio de Sesión</h1>
            <br />
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="correo" className="form-label">Correo de Usuario:</label>
                <input
                    id="correo"
                    className="form-input"
                    type="text"
                    value={correousuario}
                    onChange={(e) => setCorreousuario(e.target.value)}
                    placeholder="Ingresa el correo de usuario"
                />

                <label htmlFor="contrasena" className="form-label">Contraseña:</label>
                <input
                    id="contrasena"
                    className="form-input"
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    placeholder="Ingresa la contraseña"
                />

                <button type="submit" className="form-button">Enviar</button>
            </form>
        </div>
    );
}

export default FormularioInicioDeSesion;
