import React from 'react';
import '../styles/Dashboard.css';
import LogoSemFundo from '../assets/logo-sem-fundo.png';
import FrontEndImage from '../assets/frontend.jpg';
import BackEndImage from '../assets/backend.jpg';
import ProjectImage from '../assets/projects.jpg';
import { LogOut } from 'lucide-react';

export default function Dashboard(){
    return (
        <>
    <header id="cabecalho">
      <img src={LogoSemFundo} alt="" />
      <h1>Salas Disponíveis</h1>
      <a href="./login.html"> <LogOut /></a>
    </header>

    <div className="container">
      <div className="card">
        <h2>Salas Frontend</h2>
        <img src={FrontEndImage} alt="" />
        <p>Membros Online:</p>
        <i className="bi bi-people-fill">
          <p>3 Pessoas</p>
        </i>
        <a href="sala-front.html">
          <button className="btn-salas">Entrar</button>
        </a>
      </div>

      <div className="card">
        <h2>Sala Backend</h2>
          <img src={BackEndImage} alt="" />
        <p>Membros Online:</p>
        <i className="bi bi-people-fill">
          <p>0 Pessoas</p>
        </i>
        <a href="salas.html">
          <button className="btn-salas">Entrar</button>
        </a>
      </div>

      <div className="card">
        <h2>Salas Projetos</h2>
        <img src={ProjectImage} alt="" />
        <p>Membros Online:</p>
        <i className="bi bi-people-fill">
          <p>0 Pessoas</p>
        </i>
        <a href="salas.html">
          <button className="btn-salas">Entrar</button>
        </a>
      </div>
    </div>
        </>
    )
}