
import { SEND_MESSAGE, JOIN_CHAT } from '../actions'

const init =  {
  messages: [],
  joined:false,
  name:null
}

const user = (state=init, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...action.payload 
        ]
      }
    case JOIN_CHAT: 
      return {
          ...state,
          joined:action.payload.success,
          name:action.payload.name,
      } 
    default:
      return state
  }
}

export default user

