"use client";

import { useState } from "react";

export default function SearchComponent() {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        try {
            if (!inputValue) {
                alert("Por favor, introduce un ID antes de buscar.");
                return;
            }

            const response = await fetch(`http://100.75.242.67:8080/administrador?correo=${inputValue}`, {
                method: "GET",
                mode: "cors"
            });

            if (!response.ok) {
                throw new Error("Error en la petición");
            }

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Error:", error);
            setResult(null);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Pon un correo..."
                className="border p-2 rounded-lg"
            />
            <button
                onClick={handleSearch}
                className="mt-2 p-2 bg-blue-500 text-black rounded-lg"
            >
                Buscar
            </button>
            {result && (
                <div className="mt-4 p-4 border rounded-lg">
                    <h2 className="text-amber-950 font-bold">Resultados:</h2>
                    <pre className="text-black">{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}

        </div>
    );
}
