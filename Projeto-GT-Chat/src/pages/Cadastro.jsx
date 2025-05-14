import '../styles/Cadastro.css'
import LogoSemFundo from '../assets/logo-sem-fundo.png'
import { useState, useEffect } from 'react'

export default function Cadastro() {

  // Alterna o tipo do input entre password e text
  const [typeSenha, setSenha] = useState(false)

  function mudarTipo() {
    setSenha(!typeSenha)
  }

  // Desabilita datas futuras no datepicker 
  function DataMax() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
  
    const data = `${ano}-${mes}-${dia}`;
    console.log(data)
    document.getElementById('data-nascimento').max = data;
  }

  // Máscara CPF
    function handleKeyDown(e) {
      const inputLength = e.target.value.length

      if (e.key !== 'Backspace' && inputLength == 3 || e.key !== 'Backspace' && inputLength == 7) {
          e.target.value += '.'
      }
      else if (e.key !== 'Backspace' && inputLength == 11) {
          e.target.value += '-'
      }
  } 
  
  // Cadastro
  function cadastrar() {
    const nome = document.getElementById("nome").value
    const dataNascimento = document.getElementById("data-nascimento").value
    const cpf = document.getElementById("cpf").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("password").value

    if (!nome || !dataNascimento || !cpf || !email || !senha) {
        alert('Por favor, preencha todos os campos.')
    }
  }

  return (
    <main onLoad={DataMax}>
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
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}
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
              onKeyDown={handleKeyDown}
              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.-]/g, '')}
              minLength="14"
              maxLength="14"
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
                type={typeSenha ? 'text' : 'password'}
                placeholder="Senha"
                name="password"
                id="password"
                required
              />
              <i className={typeSenha ? 'fas fa-eye-slash' : 'fas fa-eye'} id="togglePassword" onClick={mudarTipo}></i> 
            </div>
          </div>

          <button type="button" onClick={cadastrar}>Criar conta</button>
        </form>
      </div>
      <div className="possui-conta">
        <p>Já tem uma conta? <a href="login.html">Fazer login</a></p>
      </div>
    </main>
  )
}
