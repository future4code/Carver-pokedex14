import React, { useContext, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalContext from "../../contexts/GlobalContext";
import {goToDetail, goToPokedex} from '../../Router/coordinator'
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import {Div} from './style'



function HomePage() {
  const {states, setters, requests} = useContext(GlobalContext)
  const history = useHistory();

  const goToDetalhes = (name)=>{
    history.push(`/detail/${name}`)
  }


  useEffect(()=>{
    requests.getPokemons()
  }, [])


  const pokeList = states.pokemons.results && states.pokemons.results.map((pokemon)=>{
    return(
      <PokemonCard key={pokemon.url}
        name={pokemon.name}
        order={pokemon.order}
        url={pokemon.url}
        add={()=> requests.addPokemon(pokemon)}
        det={()=> goToDetalhes(pokemon.name)}
        
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