import React from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import logo from '../../Image/logo.png'
import {Headerstyle, Button, Button2} from './style'
import { goToPokedex } from "../../Router/coordinator";



function Header() {

    const history = useHistory()
    const goToHome = ()=>{
        history.push('/')
    }

    const buttonn = ()=>{
        switch(history.location.pathname){
            case '/':
                return(
                    <div>
                        <Button2 onClick={()=> goToPokedex(history)}>Ver pokedex</Button2>
                    </div>
                )
                default:
                    return(
                        <div>
                            <Button2 onClick={()=> goToHome}>Voltar</Button2>
                        </div>
                    )
        }
    }


  return (
    <Headerstyle >
     <Button
     onClick={goToHome}
     ><img src={logo}/></Button>
     {buttonn()}
    </Headerstyle>
  );
}

export default Header;
