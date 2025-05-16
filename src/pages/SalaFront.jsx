import '../styles/Salas.css'
import ImagemThiago from '../assets/profile.png'
import ImagemNone from '../assets/none.png'
import ImagemJully from '../assets/none.png'
import { SendHorizontal } from 'lucide-react'
import { LogOut } from 'lucide-react';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SalaFront() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const messages = [
    {
      id: 1,
      author: 'Rafael',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ducimus officia cumque doloremque temporibus, at, laborum voluptatem facere saepe modi nostrum enim quis iste. Placeat delectus consectetur autem cupiditate qui!',
      image: ImagemNone
    },
    {
      id: 2,
      author: 'Thiago Gagliari',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores repudiandae ipsa molestiae, non maiores eaque beatae modi eos pariatur deserunt dolor ipsum iusto facere. Neque cupiditate perspiciatis illo enim!',
      image: ImagemThiago
    },
    {
      id: 3,
      author: 'Júlia Catapan',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium saepe molestias voluptates optio laborum laudantium repellat eaque explicabo. Eaque iure delectus culpa earum neque, quisquam maiores, error nemo facilis asperiores perferendis nobis sit pariatur doloribus a maxime! Illum obcaecati repellat qui? Dignissimos recusandae quaerat repellat blanditiis aliquam illum dolor, necessitatibus sunt sit. Laudantium dicta quae rem et, porro quisquam quis fuga non. Consequatur facilis, magnam hic voluptatem vero maxime corrupti fuga distinctio cupiditate molestias debitis voluptas quae animi! Dolore quidem consequatur.',
      image: ImagemNone
    },
    {
      id: 4,
      author: 'Jully Costa',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ducimus officia cumque doloremque temporibus, at, laborum voluptatem facere saepe modi nostrum enim quis iste. Placeat delectus consectetur autem cupiditate qui!',
      image: ImagemNone
    }
  ];

  const filteredMessages = messages.filter(message => 
    message.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="chat-container">
      {/* <!-- BARRA LATERAL COM SALAS --> */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Membros Online</h2>
        </div>

        <div className="room-list">
          <div className="room-item">
            <img src={ImagemThiago} alt="html" />
            <span>Thiago Gagliari</span>
          </div>
          <div className="room-item">
            <img src={ImagemNone} alt="react" />
            <span>Júlia Catapan</span>
          </div>
          <div className="room-item">
            <img src={ImagemJully} alt="react" />
            <span>Jully Costa</span>
          </div>
          <div className="room-item">
            <img src={ImagemNone} alt="react" />
            <span>Rafael</span>
          </div>
        </div>
      </div>

      {/* <!-- AREA PRINCIPAL DO CHAT --> */}

      <div className="main-chat">
        <div className="chat-header">
          <h2>Chat Front-End</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowSearch(!showSearch); }}><Search/></a>
          <a href="/dashboard"><LogOut/></a>
        </div>

        {/* <!-- Nossa busca será injetada aqui --> */}
        {showSearch && (
          <div id="search-container" style={{padding: 20}}>
            <input
              type="text"
              placeholder="Pesquisar mensagens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </div>
        )}

        <div className="message-container">
          {filteredMessages.map(message => (
            <div key={message.id} className="container-message">
              <img src={message.image} alt="" />
              <h4>{message.author}</h4>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            id="message"
            placeholder="Digite uma mensagem..."
          />
          <button id="btn-send" onClick={SendHorizontal} className="send-message">
            <SendHorizontal />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
