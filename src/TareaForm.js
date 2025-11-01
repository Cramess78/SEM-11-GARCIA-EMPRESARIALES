import React, { useState } from "react";

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (texto.trim() === "") {
      setError("❌ No puedes agregar una tarea vacía.");
      return;
    }

    if (texto.length > 100) {
      setError("⚠️ El texto es demasiado largo (máximo 100 caracteres).");
      return;
    }

    agregarTarea(texto.trim());
    setTexto("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            setError("");
          }}
        />
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </div>

      {error && <div className="text-danger mt-2">{error}</div>}
    </form>
  );
}

export default TareaForm;
