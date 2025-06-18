import '../styles/Salas.css'
import ImagemThiago from '../assets/profile.png'
import ImagemNone from '../assets/none.png'
import { SendHorizontal } from 'lucide-react'
import { LogOut } from 'lucide-react';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Message } from '../components/Message'
import { ChatSideBar } from '../components/ChatSideBar';

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
    author: 'Julia Catapan',
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
        
        {/* <!-- BARRA LATERAL COM USUARIOS ONLINE --> */}
        <ChatSideBar />
      
        {/* <!-- AREA PRINCIPAL DO CHAT --> */}
        <div className="main-chat">
          <div className="chat-header">
            <h2>Chat Front-End</h2>
            <div className='chat-header-icons'>
              <a href="#" onClick={(e) => { e.preventDefault(); setShowSearch(!showSearch); }}><Search/></a>

              <div className='dropdown'>
                <a href='/dashboard'><LogOut/></a>
                <div className='dropdown-content'>
                  <a href="/dashboard">Voltar</a>
                </div>
              </div>

            </div>
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
              <Message 
                key={message.id}
                image={message.image}
                author={message.author}
                content={message.content}
              />
            ))}
          </div>

          <div className="message-input">
            <input
              type="text"
              id="message"
              placeholder="Digite uma mensagem..."
            />
            <button 
              id="btn-send" 
              onClick={SendHorizontal} 
              className="send-message">
                <SendHorizontal />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
