import React from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'

const Headerstyle = styled.div`
    width: 100vw;
    height: 70px;
    background-color: red;

    
`

const Button = styled.div`
    background-color: transparent;
    width: 9rem;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    h1{
        margin: 0;
        color: #fff;
    }
`


function Header() {

    const history = useHistory()
    const goToHome = ()=>{
        history.push('/')
    }

  return (
    <Headerstyle >
     <Button
     onClick={goToHome}
     ><h1>Pokedex</h1></Button>
    </Headerstyle>
  );
}

export default Header;
