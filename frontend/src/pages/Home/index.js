import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const Home = (props) => {
  
  const user = useSelector(state => state.user)

  useEffect(()=> {
    function checkUser() {
      if(user.joined) props.history.push('/chat')
      props.history.push('/join')
    }
    console.log(user)
    checkUser()
  },[props.history, user, user.joined])

  return (<div>Home</div>);
}

export default Home