import socketIOClient from "socket.io-client"
import { sendMessage } from '../actions/send-message';
import store from '../store'
const PORT = 3005
const socket = socketIOClient(`http://localhost:${PORT}`)

socket.on('online', (data) => {
  store.dispatch(sendMessage(data.messages));
})

socket.on('chat', (data) => {
  console.log('chat data')
  console.log(data)
  store.dispatch(sendMessage(data.messages));
});

export default socket