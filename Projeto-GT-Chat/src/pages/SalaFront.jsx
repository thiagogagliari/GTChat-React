import '../styles/Salas.css'
import ImagemThiago from '../assets/profile.png'
import ImagemJulia from '../assets/none.png'
import ImagemJully from '../assets/none.png'

export default function SalaFront() {
  return (
    <>
      <div className="chat-container">
      {/* <!-- BARRA LATERAL COM SALAS --> */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Membros Online</h2>
          <i className="bi bi-chat-dots-fill"></i>
        </div>

        <div className="room-list">
          <div className="room-item">
            <img src={ImagemThiago} alt="html" />
            <span>Thiago Gagliari</span>
          </div>
          <div className="room-item">
            <img src={ImagemJulia} alt="react" />
            <span>Júlia Catapan</span>
          </div>
          <div className="room-item">
            <img src={ImagemJully} alt="react" />
            <span>Jully Costa</span>
          </div>
        </div>
      </div>

      {/* <!-- AREA PRINCIPAL DO CHAT --> */}

      <div className="main-chat">
        <div className="chat-header">
          <h2>Chat Front-End</h2>
          <a href="./dashboard.html"><i className="bi bi-box-arrow-left"></i></a>
        </div>

        {/* <!-- Nossa busca será injetada aqui --> */}
        <div id="search-container" style={{padding: 20}}></div>

        <div className="message-container">
          {/* <!-- MENSAGENS SERÃO INSERIDAS AQUI VIA JAVASCRIPT--> */}
          <div className="container-message">
            <img src="/assets/profile.png" alt="" />
            <h4>Thiago Gagliari</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              ducimus officia cumque doloremque temporibus, at, laborum
              voluptatem facere saepe modi nostrum enim quis iste. Placeat
              delectus consectetur autem cupiditate qui!
            </p>
          </div>
          <div className="container-message">
            <img src="/assets/ivan.png" alt="" />
            <h4>Ivan Domingos</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolores repudiandae ipsa molestiae, non maiores eaque beatae modi
              eos pariatur deserunt dolor ipsum iusto facere. Neque cupiditate
              perspiciatis illo enim!
            </p>
          </div>
          <div className="container-message">
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
          <div className="container-message">
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
        <div className="message-input">
          <input
            type="text"
            id="message"
            placeholder="Digite uma mensagem..."
          />
          <button id="btn-send" className="send-message">
            <i id="icon-send" className="fa fa-paper-plane fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
