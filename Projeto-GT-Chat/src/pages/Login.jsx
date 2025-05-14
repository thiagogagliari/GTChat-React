import '../styles/Login.css'
import React from 'react'
import LogoSemFundo from '../assets/logo-sem-fundo.png'

export default function Login() {

  function acessar() {
    window.location.href = '/dashboard'
  }
  return (
    <>
        <div className="login-container">
      <img src={LogoSemFundo} alt="" className="login-logo" />
      <h2>Acesse sua conta</h2>

      <form action="loginForm">
        <div className="grupo-inputs">
          <label for="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div className="grupo-inputs">
          <label for="password"></label>
          <div className="password-container">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
            <i className="fas fa-eye" id="togglePassword"></i>
          </div>
        </div>

        <div id="mensagemErro">
          <div className="mensagem-erro"></div>
        </div>

        <button type="button" onClick={acessar}>Entrar</button>

        <div className="criar-conta">
          <p>
            Ainda não tem conta?
            <a href="cadastro.html">Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}
