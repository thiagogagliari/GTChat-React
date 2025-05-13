import React from 'react'

export default function Login() {
  return (
    <>
        <div class="login-container">
      <img src="./assets/logo-sem-fundo.png" alt="" class="login-logo" />
      <h2>Acesse sua conta</h2>

      <form action="loginForm">
        <div class="grupo-inputs">
          <label for="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div class="grupo-inputs">
          <label for="password"></label>
          <div class="password-container">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
            <i class="fas fa-eye" id="togglePassword"></i>
          </div>
        </div>

        <div id="mensagemErro">
          <div class="mensagem-erro"></div>
        </div>

        <button type="button" onclick="acessar()">Entrar</button>

        <div class="criar-conta">
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
