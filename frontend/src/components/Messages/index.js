import React, { useEffect, useState } from 'react';

import socket from '../../services/chat-service'
import { useSelector } from 'react-redux';


import './styles.css';



const Messages = () => {

  const user = useSelector(state => state.user)
  
  const [text, setText] = useState('')

  useEffect(() => {
    socket.emit('online', { sender: user.name})
  },[user.name])


  const handleChange = (e) => {
    setText(e.target.value)
  }


  const handleSubmit = () => {
    const payload = {
      sender: user.name,
      text
    }
    setText('')
    socket.emit('chat', payload)
  }



  return (
    <div className="message-container">
     
     <div className="message-list">

       {
         user && user.messages && user.messages.map((message, index) => {
           return (
             <div key={index}>
               <div className="message">
                    <strong>{message.sender}:</strong>
                    <p>{message.text}</p>
                 </div>
            </div>
           )
         })
         
       }

     </div>
     <div className="send-message">
        <textarea onChange={handleChange} className="message" value={text} type="text"/>
        <button onClick={handleSubmit} className="btn-send">Send</button>
     </div>
    </div>
  )
}

export default Messages