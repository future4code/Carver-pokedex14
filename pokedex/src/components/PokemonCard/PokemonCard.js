import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../contexts/GlobalContext";
import {goToDetail} from '../../Router/coordinator'
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Card, Buttons} from './style'



function PokemonCard(props){
    const {setters} = useContext(GlobalContext)
    const [images, setImages] = useState('') //PEGA A IMAGEM DO POKEMON
    const url = props.url


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

        <Card>
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