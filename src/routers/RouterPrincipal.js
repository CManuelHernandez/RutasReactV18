import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Articulos } from "../componentes/Articulos";
import { Contacto } from "../componentes/Contacto";
import { Error } from "../componentes/Error";
import { Inicio } from "../componentes/Inicio";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
