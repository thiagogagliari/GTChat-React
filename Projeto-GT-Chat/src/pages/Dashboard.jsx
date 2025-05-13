export default function Dashboard(){
    return (
        <>
    <header id="cabecalho">
      <img src="./assets/logo-sem-fundo.png" width="50pz" alt="" />
      <h1>Salas Disponíveis</h1>
      <a href="./login.html"><i class="bi bi-box-arrow-left"></i></a>
    </header>

    <div class="container">
      <div class="card">
        <h2>Salas Frontend</h2>
        <img src="./assets/frontend.jpg" alt="" />
        <p>Membros Online:</p>
        <i class="bi bi-people-fill">
          <p>3 Pessoas</p>
        </i>
        <a href="sala-front.html">
          <button class="btn-salas">Entrar</button>
        </a>
      </div>

      <div class="card">
        <h2>Sala Backend</h2>
        <img src="/assets/backend.jpg" alt="" />
        <p>Membros Online:</p>
        <i class="bi bi-people-fill">
          <p>0 Pessoas</p>
        </i>
        <a href="salas.html">
          <button class="btn-salas">Entrar</button>
        </a>
      </div>

      <div class="card">
        <h2>Salas Projetos</h2>
        <img src="/assets/projects.jpg" alt="" />
        <p>Membros Online:</p>
        <i class="bi bi-people-fill">
          <p>0 Pessoas</p>
        </i>
        <a href="salas.html">
          <button class="btn-salas">Entrar</button>
        </a>
      </div>
    </div>
        </>
    )
}