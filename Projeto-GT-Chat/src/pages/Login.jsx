import '../styles/Login.css'
import React from 'react'
import { useState } from 'react'
import LogoSemFundo from '../assets/logo-sem-fundo.png'

export default function Login() {

  // Alterna o tipo do input entre password e text
  const [typeSenha, setSenha] = useState(false)
  
  function mudarTipo() {
    setSenha(!typeSenha)
  }

  function acessar() {
    window.location.href = '/dashboard'
  }
  return (
    <>
        <div className="login-container">
      <img src={LogoSemFundo} alt="" className="login-logo" />
      <h2 className='login-texto'>Acesse sua conta</h2>

      <form action="loginForm">
        <div className="login-grupo-inputs">
          <label className='login-label' for="email"></label>
          <input
            className='login-input'
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div className="login-grupo-inputs">
          <label for="password"></label>
          <div className="login-password-container">
            <input
              className='login-input'
              type={typeSenha ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
            <i className={typeSenha ? 'fas fa-eye-slash' : 'fas fa-eye'} id="togglePassword" onClick={mudarTipo}></i>
          </div>
        </div>

        <div id="mensagemErro">
          <div className="login-mensagem-erro"></div>
        </div>

        <button className='login-button' type="button" onClick={acessar}>Entrar</button>

        <div className="login-criar-conta">
          <p>
            Ainda não tem conta?
            <a href="/cadastro">Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}
