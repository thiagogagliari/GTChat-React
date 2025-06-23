import '../styles/Login.css'
import React, { useState } from 'react'
import LogoSemFundo from '../assets/logo-sem-fundo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  // Alterna o tipo do input entre password e text
  const [typeSenha, setSenha] = useState(false)
  
  function mudarTipo() {
    setSenha(!typeSenha)
  }

  async function acessar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.')
      return
    }
    
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const result = await res.json()

      if (!res.ok) {
        setErrorMessage(result.message || 'Erro ao fazer login')
        return
      }

      localStorage.setItem('token', result.token)
      localStorage.setItem('user', JSON.stringify(result.user))

      navigate('/dashboard')
    } catch (err) {
      console.error(err)
      setErrorMessage('Erro ao conectar com o servidor')
    }
  }

  return (
    <div id='login-body'>
      <div className="login-container">
        <Link to='/'>
          <img src={LogoSemFundo} alt="" className="login-logo" />
        </Link>
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
            <div className="login-password-container">
              <input
                className='login-input'
                type={typeSenha ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Digite sua senha"
                required
              />   
              <i className={typeSenha ? 'fas fa-eye-slash fa-lg' : 'fas fa-eye fa-lg'} id="togglePassword" onClick={mudarTipo}></i>
            </div>
          </div>

          <button className='login-button' type="button" onClick={acessar}>Entrar</button>
            {errorMessage && (
              <p className="login-input-error">{errorMessage}</p>
            )}
        </form>
      </div>
          <div className="login-criar-conta">
            <p>
              Ainda não tem conta?
              <Link to="/cadastro"> Cadastre-se</Link>
            </p>
          </div>
    </div>
  )
}