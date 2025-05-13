import LogoSemFundo from '../assets/logo-sem-fundo.png'
import Footer from '../components/Footer'

export default function Home(){
    return (
        <>
<header>
    <div className="container header-container">
      <div className="logo">
        <img src={LogoSemFundo} alt="GTChat Logo" />
      </div>
      <div className="nav-buttons">
        <button class="btn-outline" onclick="goToLogin()">Login</button>
        <button class="btn-fill" onclick="goToRegister()">Cadastre-se</button>
      </div>
    </div>
  </header>

  <main>
    <div class="container main-content">
      <div class="text-area">
        <h1><span>CHAT GT</span>:<br />Conecte-se com outros<br />Devs do <strong>Geração Tech</strong></h1>
        <p>O chat moderno para alunos do Geração Tech. Conecte-se com devs, compartilhe conhecimento e evolua em grupo. Participe de discussões, tire dúvidas e cresça com a comunidade.</p>
      </div>
      <div class="image-area">
        <img src="./assets/chat-image-fundo.png" alt="Imagem do chat" />
      </div>
    </div>
  </main>

 
  <section class="features">
    <div class="container">
      <h2>Por que usar o GTChat?</h2>
      <div class="cards">
        <div class="card">
          <h3>Conexão em tempo real</h3>
          <p>Fale com outros alunos instantaneamente e troque experiências.</p>
        </div>
        <div class="card">
          <h3>100% Gratuito</h3>
          <p>Feito para todos os estudantes do Geração Tech sem nenhum custo.</p>
        </div>
        <div class="card">
          <h3>Ambiente Colaborativo</h3>
          <p>Ajude e aprenda com outros devs iniciantes como você.</p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
        </>
    )
}