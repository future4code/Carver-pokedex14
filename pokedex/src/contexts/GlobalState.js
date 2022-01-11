import React, {useState, useEffect} from "react";
import axios from "axios";
import GlobalContext from './GlobalContext'
import URL from '../constants/url'
import { useHistory } from 'react-router-dom';


const GlobalState = (props)=>{
    const [pokemons, setPokemons] = useState([])
    const [url, setUrl] = useState('')
    const [pokedex, setPokedex] = useState([])
    const [details, setDetails] = useState([])
    const [newPokemon, setNewPokemon] = useState(URL)
    const [capture, setCapture] = useState(false)
    const history = useHistory();

    useEffect(()=>{
        getPokemons()
    }, [])

    const getPokemons = ()=>{
        axios.get(newPokemon)
        .then(res=>{
            setPokemons(res.data)
        }).catch(err =>{
            alert(err, 'Erro ao carregar')
        })
    }




    //FUNÇÃO QUE AICIONA POKEMON (BOTÃO)

   const addPokemon =(newPoke)=>{

        const adicionaPoke = pokedex.some(
            (i)=> {
              return i.name === newPoke.name
            })
        
        if(!adicionaPoke){
            const newList = [...pokedex, newPoke]
            setPokedex(newList)
            setCapture(true)
            
        }else{
            alert('Pokemon já adicionado!')
        }
        
        
    }



    const removePokedex = (poke)=>{
        const onPoke = pokedex.some(
            (i)=> 
            {
                return i.name === poke.name
            })
        if(onPoke){
            const index = pokedex.findIndex((pokemon)=>{
                return pokemon.name === poke.name
            })
            const newList = [...pokedex, poke]
            setPokemons(newList)
            pokedex.splice(index, 1)
            alert('Pokemon excluído com sucesso!')
        }else{
            alert('Não está na pokemon')
        }
        
    }





    const getDetail = (name)=>{
        axios.get(`${URL}/${name}`)
        .then(res =>{
            setDetails(res.data)
            
        }).catch(err =>{
            alert(err.message)
        })
    }





    const requests = {getPokemons, getDetail, addPokemon, removePokedex}
    const states = {pokemons, details, url, pokedex}
    const setters = {setPokemons, setNewPokemon, setUrl, setPokedex}


    
    const datas = {requests, states, setters}

    return(
        <GlobalContext.Provider value={datas}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState