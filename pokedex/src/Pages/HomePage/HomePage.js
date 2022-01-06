import React, { useContext, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalContext from "../../contexts/GlobalContext";
import {goToDetail, goToPokedex} from '../../Router/coordinator'
import { useHistory } from 'react-router-dom'
import {Div, Card, Buttons} from './style'
import axios from "axios";
import URL from '../../constants/url'


const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
`

// const Card = styled.div`
//     width: 42%;
//     height: flex;
//     display: flex;
//     flex-direction: column;
//     margin: 15px;
//     border-radius: 8px;
//     box-shadow: 0 0 1em gray;
//     @media(min-width: 768px){
//         width: 29%;
//     }
//     @media(min-width: 1000px){
//         width: 21.5%;
//     }

//     img{
//         width: 95%;
//         height: 70%;
//         margin: 0 auto;
//         margin-top: 15px;
//         margin-bottom: 15px;
//         border-radius: 8px;
//     }
// `

// const Buttons = styled.div`
//     text-align: center;
//     border: 1px solid;
//     height: ;
    
// `

function HomePage() {
  const {states, setters, requests} = useContext(GlobalContext)
  const history = useHistory();

  const goToDetalhes = (name)=>{
    history.push(`/detail/${name}`)
  }


  useEffect(()=>{
    requests.getPokemons()
  }, [])


  


  const pokeList = states.pokemons && states.pokemons.map((pokemon)=>{
    return(
      <PokemonCard key={pokemon.url}
        name={pokemon.name}
        order={pokemon.order}
        url={pokemon.url}
        add={()=> requests.addPokemon(pokemon)}
        det={()=> goToDetalhes(pokemon.name)}
        image={pokemon.sprites.front_default}
      />
    )
  })
  
  return (
    <Div >
    {pokeList === [] ? <p>Loading</p> : pokeList}
  {/* {pokeList} */}  
  <button onClick={()=> goToPokedex(history)}>Ir para pokedex</button>

    </Div>
  );
}

export default HomePage;