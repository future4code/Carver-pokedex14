import React from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import logo from '../../Image/logo.png'

const Headerstyle = styled.div`
    width: 100vw;
    height: 90px;
    background-color: #950101;

    
`

const Button = styled.div`
    background-color: transparent;
    width: 11rem;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    img{
        margin: 0;
        width: 100%;
        height: 80%;
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
     ><img src={logo}/></Button>
    </Headerstyle>
  );
}

export default Header;
