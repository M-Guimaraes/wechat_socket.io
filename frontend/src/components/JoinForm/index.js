import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './styles.css'
import { JOIN_CHAT } from '../../actions'

const JoinForm = (props) => {
  const history =  useHistory()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const handleSubmit = () => {
    if(!name || !name.length > 0) return;
    dispatch({
      type: JOIN_CHAT,
      payload: { success: true, name }
    })
    history.push('/chat')
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (<>
    <div className="join-form">
      <div className="user-input">
        <label htmlFor="username">Hello, <span>whats your nickname ? :)</span></label>
        <input placeholder="type your nickname..." type="text" id="username" onChange={handleChange} value={name} />
      </div>
      <div className="submit-button">
        <button onClick={handleSubmit}>Join Chat</button>
      </div>
    </div>
  </>)
}

export default JoinForm