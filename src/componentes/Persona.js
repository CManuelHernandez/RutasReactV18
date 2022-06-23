import React from "react";
import { useParams } from "react-router-dom";

export const Persona = () => {
  // Valores por defecto en parametros opciones
  // const { nombre = "UnNamed", apellido = "UnSurNamed" } = useParams();

  const { nombre, apellido } = useParams();
  return (
    <div>
      {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
      {nombre && (
        <h1>
          Página de Persona: {nombre} {apellido}
        </h1>
      )}
      <p>Esta es la página de Persona</p>
    </div>
  );
};
