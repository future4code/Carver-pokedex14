import React, { useContext, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalContext from "../../contexts/GlobalContext";
import {goToDetail, goToPokedex} from '../../Router/coordinator'
import { useHistory } from 'react-router-dom';
import {Div, Card, Buttons} from './style'
import axios from "axios";
import URL from '../../constants/url'



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