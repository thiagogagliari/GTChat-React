import React from 'react';
import '../styles/Dashboard.css';
import LogoSemFundo from '../assets/logo-sem-fundo.png';
import FrontEndImage from '../assets/frontend.jpg';
import BackEndImage from '../assets/backend.jpg';
import ProjectImage from '../assets/projects.jpg';
import Footer from '../components/Footer';
import { LogOut } from 'lucide-react';
import { UsersRound } from 'lucide-react';

export default function Dashboard(){

  function dashboarLogout(){
    window.location.href = '/login'
  }

  function acessoFront(){
    window.location.href = '/salas'
  }
    return (
        <>
    <header id="cabecalho">
      <img src={LogoSemFundo} alt="" />
      <h1>Salas Disponíveis</h1>
      <a onClick={dashboarLogout}> <LogOut /></a>
    </header>

    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className='dashboard-texto'>Salas Frontend</h2>
        <img src={FrontEndImage} alt="" />
        <p className='dashboard-paragrafo'>Membros Online:</p>
        <UsersRound />
          <p className='dashboard-paragrafo'>3 Pessoas</p>
          <button onClick={acessoFront}>Entrar</button>
      </div>

      <div className="dashboard-card">
        <h2 className='dashboard-texto'>Sala Backend</h2>
          <img src={BackEndImage} alt="" />
        <p className='dashboard-paragrafo'>Membros Online:</p>
        <UsersRound />
          <p className='dashboard-paragrafo'>0 Pessoas</p>
          <button onClick={acessoFront} className="btn-salas">Entrar</button>
      </div>

      <div className="dashboard-card">
        <h2 className='dashboard-texto'>Salas Projetos</h2>
        <img src={ProjectImage} alt="" />
        <p className='dashboard-paragrafo'>Membros Online:</p>
        <UsersRound />
          <p className='dashboard-paragrafo'>0 Pessoas</p>
          <button onClick={acessoFront}>Entrar</button>
      </div>
    </div>
    <Footer />
        </>
    )
}