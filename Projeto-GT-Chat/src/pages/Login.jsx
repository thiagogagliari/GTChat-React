import '../styles/Login.css'
import React, { useState } from 'react'
import LogoSemFundo from '../assets/logo-sem-fundo.png'

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(false);

  function acessar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    if (email === 'user@user.com' && password === '123456') {
      console.log('success')
      window.location.href = '/dashboard';
    } else {
      console.log('error')
      setErrorMessage(true);
    }
    console.log('error',errorMessage)
  }

  return (
    <div id='bodyLogin'>
      <div className="login-container">
        <img src={LogoSemFundo} alt="" className="login-logo" />
        <h2 className='login-texto'>Acesse sua conta</h2>

        <form action="loginForm">
          <div className="login-grupo-inputs">
            <label className='login-label' htmlFor="email"></label>
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
            <label htmlFor="password"></label>
            <div className="login-password-container">
              <input
                className='login-input'
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                required
              />
              <i className="fas fa-eye" id="togglePassword"></i>
            </div>
            {errorMessage && <p className="login-input-error">Email ou senha inválidos.</p>}
          </div>

          

          <button className='login-button' type="button" onClick={acessar}>Entrar</button>

          <div className="login-criar-conta">
            <p>
              Ainda não tem conta?
              <a className='login-direct-cadastro' href="/cadastro">Cadastre-se</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}