import React, {useState, useEffect} from "react";
import axios from "axios";
import GlobalContext from './GlobalContext'
import URL from '../constants/url'
import {goToDetail} from '../Router/coordinator'
import { useHistory } from 'react-router-dom';


const GlobalState = (props)=>{
    const [pokemons, setPokemons] = useState([])
    const [url, setUrl] = useState('')
    const [pokedex, setPokedex] = useState([])
    const [details, setDetails] = useState([])
    const [newPokemon, setNewPokemon] = useState(URL)

    const history = useHistory();

    // useEffect(()=>{
    //     getPokemons()
    // }, [newPokemon])


    const getPokemons = ()=>{
        axios.get(newPokemon)
        .then(res=>{
            setPokemons(res.data)
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    const addPokemon =(newPoke)=>{
        
        const adicionaPoke = pokedex.findIndex(
            (i)=> {
              return i.name === newPoke.name
            })

        const newList = [...pokedex]

        if(adicionaPoke === -1){
            newList.push({...newPoke, amount: 1})
            console.log(states.pokedex[adicionaPoke])
        }else{
            console.log('Pokemon já adicionado')
        }
        setPokedex(newList)
        console.log(pokedex)

    }


    const removePokedex = (poke)=>{
        const removePoke = pokedex.findIndex(
            (i)=> 
            {
                return i.id === poke.id
            })
        let newList = [...pokedex]
        if(newList[removePoke].amount === 1){
            newList.splice(removePoke, 1)
        }else{
            newList[removePoke].amount -= 1
        }
        setPokedex(newList)
        console.log('excluiu', pokedex)

        
    }

    const getDetail = (name)=>{
        axios.get(`${URL}/${name}`)
        .then(res =>{
            setDetails(res.data)
            console.log(res.data)
            console.log(states.details)
        }).catch(err =>{
            console.log(err.message)
        })
    }

    // const getDetail = (poke, name)=>{
    //     setDetails(poke)
    //     goToDetail(name)
    // }



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