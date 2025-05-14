import React from 'react'
import '../styles/Cadastro.css'
import LogoSemFundo from '../assets/logo-sem-fundo.png'

export default function Cadastro() {
  return (
    <main>
      <div className="cadastro-container">
        <img
          src={LogoSemFundo}
          alt="logo do GT Chat"
          id="logo-icone"
        />
        <h1>Cadastrar conta</h1>

        <form>
          <div className="grupo-inputs">
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              id="nome"
              required
            />
          </div>

          <div className="grupo-inputs">
            <input
              placeholder="Data de nascimento"
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              max="currentDate"
              name="data-nascimento"
              id="data-nascimento"
              required
            />
          </div>

          <div className="grupo-inputs">
            <input
              type="text"
              placeholder="CPF"
              name="cpf"
              id="cpf"
              oninput="this.value = this.value.replace(/[^0-9.-]/g, '')"
              minlength="14"
              maxlength="14"
              required
            />
          </div>

          <div className="grupo-inputs">
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="grupo-inputs">
            <div className="password-container">
              <input
                type="password"
                placeholder="Senha"
                name="password"
                id="password"
                required
              />
              <i className="fas fa-eye" id="togglePassword"></i> 
            </div>
          </div>

          <button type="button" onclick="cadastrar()">Criar conta</button>
        </form>
      </div>
      <div className="possui-conta">
        <p>Já tem uma conta? <a href="login.html">Fazer login</a></p>
      </div>
    </main>
  )
}
