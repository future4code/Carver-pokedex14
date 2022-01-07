import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../contexts/GlobalContext";
import {goToDetail} from '../../Router/coordinator'
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import { useHistory } from 'react-router-dom';

//


export const Card = styled.div`
    width: 42%;
    height: flex;
    display: flex;
    flex-direction: column;
    margin: 15px;
    border-radius: 8px;
    box-shadow: 0 0 1em gray;
    @media(min-width: 768px){
        width: 29%;
    }
    @media(min-width: 1000px){
        width: 21.5%;
    }

    img{
        width: 95%;
        height: 70%;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 8px;
    }

    h2{
        margin: 0 auto;
    }
`

export const Buttons = styled.div`
    text-align: center;
    width: 100%;
    height: flex;
    flex-direction: row;
    

    button{
        height: 30px;
        margin: 10px 0;
    }
    `


        
   

function PokemonCard(props){
    const {setters} = useContext(GlobalContext)
    const [images, setImages] = useState('')
    const url = props.url
    const history = useHistory();

    useEffect(()=>{
        axios.get(`${url}`)
        .then((res) =>{
            console.log(res.data)
            setImages(res.data.sprites.front_default)
        }).catch((err) =>{
            console.log(err)
        })
    }, [url])



   
    
    return(

        <Card >
        <img src={images} alt={props.name}/>
        <h2>{props.name} </h2>
        <span>{props.id}</span>
        <Buttons>
        <button onClick={props.add}>Adicionar</button>
        <button onClick={props.det}>Ver detalhe</button>
        </Buttons>
        </Card>

    )
}
export default PokemonCard