import LogoSemFundo from '../assets/logo-sem-fundo.png'
import ChatImagemFundo from '../assets/chat-image-fundo.png'
import '../styles/Home.css'

export default function Home(){

  function goToLogin(){
    window.location.href = '/login'
  }

  function goToRegister(){
    window.location.href = '/cadastro'
  }
    return (
        <>
<header>
    <div className="container header-container">
      <div className="logo">
        <img src={LogoSemFundo} alt="GTChat Logo" />
      </div>
      <div className="nav-buttons">
        <button className="btn-outline" onClick={goToLogin}>Login</button>
        <button className="btn-fill" onClick={goToRegister}>Cadastre-se</button>
      </div>
    </div>
  </header>

  <main>
    <div className="container main-content">
      <div className="text-area">
        <h1><span>CHAT GT</span>:<br />Conecte-se com outros<br />Devs do <strong>Geração Tech</strong></h1>
        <p>O chat moderno para alunos do Geração Tech. Conecte-se com devs, compartilhe conhecimento e evolua em grupo. Participe de discussões, tire dúvidas e cresça com a comunidade.</p>
      </div>
      <div className="image-area">
        <img src={ChatImagemFundo} alt="Imagem do chat" />
      </div>
    </div>
  </main>

 
  <section className="features">
    <div className="container">
      <h2>Por que usar o GTChat?</h2>
      <div className="cards">
        <div className="card">
          <h3>Conexão em tempo real</h3>
          <p>Fale com outros alunos instantaneamente e troque experiências.</p>
        </div>
        <div className="card">
          <h3>100% Gratuito</h3>
          <p>Feito para todos os estudantes do Geração Tech sem nenhum custo.</p>
        </div>
        <div className="card">
          <h3>Ambiente Colaborativo</h3>
          <p>Ajude e aprenda com outros devs iniciantes como você.</p>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}