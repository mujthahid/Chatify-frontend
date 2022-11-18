import React from 'react'
import styled from 'styled-components'
import Robot from '../assets/robot.gif'
import Logout from './Logout';


function Welcome({currentUser}) {

  
   
 
  return (
    <Container>
    <div className="logoutBtn">
        < Logout/></div>   
        <img src={Robot} alt="Robot" />
        <h1>
            Welcome, <span>{currentUser.username} !</span>
        </h1>
        <br />
        <h3>Please select a chat to start messaging</h3>
    </Container>
  )
}

const Container = styled.div`
.logoutBtn{
    position: absolute;
    top: 5px;
    right: 5px;
}
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img{
    height: 20rem;
}
span{
    color: #4e00ff;
}

@media screen and (min-width: 350px) and (max-width: 720px){
    h1{
        font-size: 20px;
    }
    h3{
        font-size: 13px;
        text-align: center;
    }
    img{
        height: 15rem;
    }
}

`;

export default Welcome
