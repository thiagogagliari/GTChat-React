import React from 'react'

export default function SalaFront() {
  return (
    <>
      <div class="chat-container">
      {/* <!-- BARRA LATERAL COM SALAS --> */}
      <div class="sidebar">
        <div class="sidebar-header">
          <h2>Membros Online</h2>
          <i class="bi bi-chat-dots-fill"></i>
        </div>

        <div class="room-list">
          <div class="room-item">
            <img src="/assets/ivan.png" alt="javascript" />
            <span>Ivan Domingos</span>
          </div>
          <div class="room-item">
            <img src="/assets/profile.png" alt="html" />
            <span>Thiago Gagliari</span>
          </div>
          <div class="room-item">
            <img src="/assets/none.png" alt="react" />
            <span>Júlia Catapan</span>
          </div>
          <div class="room-item">
            <img src="/assets/none.png" alt="react" />
            <span>Jully Costa</span>
          </div>
        </div>
      </div>

      {/* <!-- AREA PRINCIPAL DO CHAT --> */}

      <div class="main-chat">
        <div class="chat-header">
          <h2>Chat Front-End</h2>
          <i id="search" class="bi bi-search" onclick="search()"></i>
          <a href="./dashboard.html"><i class="bi bi-box-arrow-left"></i></a>
        </div>

        {/* <!-- Nossa busca será injetada aqui --> */}
        <div id="search-container" style="padding: 10px"></div>

        <div class="message-container">
          {/* <!-- MENSAGENS SERÃO INSERIDAS AQUI VIA JAVASCRIPT--> */}
          <div class="container-message">
            <img src="/assets/profile.png" alt="" />
            <h4>Thiago Gagliari</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              ducimus officia cumque doloremque temporibus, at, laborum
              voluptatem facere saepe modi nostrum enim quis iste. Placeat
              delectus consectetur autem cupiditate qui!
            </p>
          </div>
          <div class="container-message">
            <img src="/assets/ivan.png" alt="" />
            <h4>Ivan Domingos</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolores repudiandae ipsa molestiae, non maiores eaque beatae modi
              eos pariatur deserunt dolor ipsum iusto facere. Neque cupiditate
              perspiciatis illo enim!
            </p>
          </div>
          <div class="container-message">
            <img src="/assets/none.png" alt="" />
            <h4>Júlia Catapan</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium saepe molestias voluptates optio laborum laudantium
              repellat eaque explicabo. Eaque iure delectus culpa earum neque,
              quisquam maiores, error nemo facilis asperiores perferendis nobis
              sit pariatur doloribus a maxime! Illum obcaecati repellat qui?
              Dignissimos recusandae quaerat repellat blanditiis aliquam illum
              dolor, necessitatibus sunt sit. Laudantium dicta quae rem et,
              porro quisquam quis fuga non. Consequatur facilis, magnam hic
              voluptatem vero maxime corrupti fuga distinctio cupiditate
              molestias debitis voluptas quae animi! Dolore quidem consequatur.
            </p>
          </div>
          <div class="container-message">
            <img src="/assets/none.png" alt="" />
            <h4>Jully Costa</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              ducimus officia cumque doloremque temporibus, at, laborum
              voluptatem facere saepe modi nostrum enim quis iste. Placeat
              delectus consectetur autem cupiditate qui!
            </p>
          </div>
        </div>
        <div class="message-input">
          <input
            type="text"
            id="message"
            placeholder="Digite uma mensagem..."
          />
          <button id="btn-send" class="send-message">
            <i id="icon-send" class="fa fa-paper-plane fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
