
"use client";
import React, { useState } from 'react';
const correoGuardado = localStorage.getItem('correo');
// Componente del formulario
const DatosTicket = () => {
    const [formData, setFormData] = useState({
        categoria: '',
        correo: correoGuardado,
        computadora: '',
        descripcion: '',
    }
    );

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Realizamos la solicitud POST al backend
        try {
            const response = await fetch('http://100.75.242.67:8080/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Convertimos los datos a formato JSON
            });

            // Verificar la respuesta del backend
            if (response.ok) {
                console.log('Formulario enviado con éxito');
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Hubo un error al enviar el formulario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.title}>Abrir un parte de Incidencia</h2>
            <div style={styles.inputGroup}>
                <label htmlFor="categoria" style={styles.label}>Categoría:</label>
                <input
                    type="text"
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    placeholder="Ingrese la categoría"
                    style={styles.input}
                />
            </div>

            <div style={styles.inputGroup}>
                <label htmlFor="computadora" style={styles.label}>Computadora:</label>
                <input
                    type="text"
                    id="computadora"
                    name="computadora"
                    value={formData.computadora}
                    onChange={handleChange}
                    placeholder="Ingrese la computadora"
                    style={styles.input}
                />
            </div>
            <div style={styles.inputGroup}>
                <label htmlFor="descripcion" style={styles.label}>Descripción:</label>
                <textarea
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    placeholder="Ingrese la descripcion"
                    style={styles.input}
                />
            </div>
            <button type="submit" style={styles.submitButton}>
                Enviar
            </button>
        </form>
    );
};

// Estilos en objeto JavaScript
const styles = {
    form: {
        backgroundColor: '#121212', // Fondo oscuro
        color: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '500px',
        margin: '50px auto',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#333',
        color: 'white',
        border: '1px solid #444',
        borderRadius: '6px',
        fontSize: '14px',
    },
    textarea: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#333',
        color: 'white',
        border: '1px solid #444',
        borderRadius: '6px',
        fontSize: '14px',
        height: '150px',
        resize: 'none',
    },
    submitButton: {
        width: '100%',
        padding: '14px',
        backgroundColor: '#555',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default DatosTicket;