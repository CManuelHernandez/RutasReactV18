import React from "react";
import {
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { Articulos } from "../componentes/Articulos";
import { Contacto } from "../componentes/Contacto";
import { Error } from "../componentes/Error";
import { Inicio } from "../componentes/Inicio";
import { Acerca } from "../componentes/panel/Acerca";
import { Crear } from "../componentes/panel/Crear";
import { Gestion } from "../componentes/panel/Gestion";
import { InicioPanel } from "../componentes/panel/InicioPanel";
import { PanelControl } from "../componentes/PanelControl";
import { Persona } from "../componentes/Persona";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />

      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/panel"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Panel de control
            </NavLink>
          </li>
        </ul>
      </nav>

      <h2>Menu</h2>
      <hr />

      <section>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/persona/:nombre/:apellido" element={<Persona />} />
          <Route path="/persona/:nombre" element={<Persona />} />
          <Route path="/persona" element={<Persona />} />
          <Route
            path={"/redirigir"}
            element={<Navigate to="/persona/man/hernandez" />}
          />
          <Route path="/panel/*" element={<PanelControl />}>
            <Route index element={<InicioPanel />} />
            <Route path="inicio" element={<InicioPanel />} />
            <Route path="crear-articulos" element={<Crear />} />
            <Route path="gestion-usuarios" element={<Gestion />} />
            <Route path="acerca-de" element={<Acerca />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </section>

      <hr />
      <footer>Este es el pie de página</footer>
    </BrowserRouter>
  );
};
