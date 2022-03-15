import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home/Home'
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario'

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';

function App() {
  return (
  <Router>
      <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/usuarios">usuarios cadastrados</NavLink>
            </li>
            <li>
              <NavLink to="/adicionar">adicionar usuario</NavLink>
            </li>
          </ul>
        </nav>
      </header>
        <main>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/usuarios/:id" element={<DetalhesUsuario />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/adicionar" element={<AdicionarUsuario />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
          
        </main>
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada() {
  return <>
    <h1>404</h1>
    <p>Pagina nao encontrada</p>
  </>
}

export default App;
