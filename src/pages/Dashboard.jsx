import '../styles/Dashboard.css';
import LogoSemFundo from '../assets/logo-sem-fundo.png';
import FrontEndImage from '../assets/frontend.jpg';
import BackEndImage from '../assets/backend.jpg';
import ProjectImage from '../assets/projects.jpg';
import Footer from '../components/Footer';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom'
import { DashboardCard } from '../components/DashboardCard';

export default function Dashboard(){
  const salas = [
        {
            nome: "Frontend",
            img: FrontEndImage,
            totalOnline: 3,
            rota: '/salas'
        },
        {
            nome: "Backend",
            img: BackEndImage,
            totalOnline: 0,
            rota: '/salas'
        },
        {
            nome: "Projetos",
            img: ProjectImage,
            totalOnline: 0,
            rota: '/salas'
        }
  ]

  function dashboardLogout(){
    window.location.href = '/login'
  }

    return (
      <>
        <header id="cabecalho">
          <Link to='/'>
            <img src={LogoSemFundo} alt="" />
          </Link>
          <h1>Salas Disponíveis</h1>
          <a onClick={dashboardLogout}> <LogOut /></a>
        </header>

        <div className="dashboard-container">
          {salas.map(sala => (
              <DashboardCard 
                key={sala.id}
                nome={sala.nome}
                img={sala.img}
                totalOnline={sala.totalOnline}
                rota={sala.rota}
              />
          ))}
        </div>

        <Footer />
      </>
    )
}