import React, { useContext, useEffect, useState } from "react";
import URL from '../../constants/url'
import axios from "axios";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import GlobalContext from "../../contexts/GlobalContext";



const Card = styled.div`
    width: 60%;
    height: flex;
    display: flex;
    flex-direction: column;
    margin: 15px;
    border-radius: 8px;
    box-shadow: 0 0 1em gray;
    text-align: center;
    @media(min-width: 768px){
        width: 29%;
    }
    @media(min-width: 1000px){
        width: 21.5%;
    }

    img{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 8px;
    }

`

const Buttons = styled.div`
    text-align: center;
    width: 100%;
    height: flex;
    flex-direction: row;
    

    button{
        height: 30px;
        margin: 10px 0;
    }
    `

    const H1 = styled.h1`
    text-align: center;
    `

    const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
    `


function DetailPage() {

  const params = useParams()
  const [pokemon, setPokemon] = useState()
  const {states, setters, requests} = useContext(GlobalContext)

  // useEffect(()=>{
  //   // getDetail(`${URL}/${params.name}`)
  // }, [])

  

  const getDetail = ()=>{
    axios.get(`${URL}/${params.name}`)
    .then(res =>{
        setPokemon(res.data)
        console.log(res.data)
        console.log(pokemon)
    }).catch(err =>{
        console.log(err.message)
    })
}

useEffect(()=>{
  getDetail()
}, [])


  return (
    <div >
      

      {pokemon ? (
        <Div>
        <H1>{pokemon.name.toUpperCase()}</H1>
        <Card>
          <img src={pokemon.sprites.front_shiny}/>
          <p>Type: {pokemon.types[0].type.name}</p>
        </Card>
        <Card>
          <img src={pokemon.sprites.back_shiny}/>
          <p>Type: {pokemon.types[1].type.name}</p>
        </Card>
        <Card>
        <h1>Stats</h1>
        
          <p>HP: {pokemon.stats[0].base_stat}</p>
        
          <p>Attack: {pokemon.stats[1].base_stat}</p>
        
        <p>Defense: {pokemon.stats[2].base_stat}</p>
        
        <p>Special-attack{pokemon.stats[3].base_stat}</p>
        
        <p>Special-defense{pokemon.stats[4].base_stat}</p>

        <p>Speed: {pokemon.stats[5].base_stat}</p>
        </Card>
        <Card>
        <h1>Moves</h1>
          {pokemon.moves.slice(0, 3).map((poke)=>{
            return <p key={poke.move.name}>{poke.move.name}</p>
          })}
        </Card>
        </Div>
      ) : <div></div>}
    </div>
  );
}

export default DetailPage;
