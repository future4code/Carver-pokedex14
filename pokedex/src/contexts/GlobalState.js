import React, {useState, useEffect} from "react";
import axios from "axios";
import GlobalContext from './GlobalContext'
import URL from '../constants/url'


const GlobalState = (props)=>{
    const [pokemons, setPokemons] = useState([])
    const [url, setUrl] = useState('')
    const [pokedex, setPokedex] = useState([])
    const [details, setDetails] = useState([])
    const [newPokemon, setNewPokemon] = useState(URL)

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
    

        // const confereConteudo = false

        // for(let i = 0; i < pokedex.length; i++){
        //     if(newPoke.name === pokedex[i].name){
        //         confereConteudo = true
        //     }
        // }
        // confereConteudo === false ? changePokedex(newPoke) : console.log('Você já tem esse pokemon')

    }
    

    
    const changePokedex = (newPoke)=>{
        const newPokedex = [...pokedex, newPoke]
        setPokedex(newPokedex)
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

        // for (let i = 0; i < pokedex.length; i++){
        //     if(pokedex[i] !== poke) removePoke.push(pokedex[i])
        // }
        // setPokedex(removePoke)
    }

    const getDetail = (name)=>{
        axios.get(`${URL}/${name}`)
        .then(res =>{
            setDetails(res.data)
            console.log(res.data)
        }).catch(err =>{
            console.log(err.message)
        })
    }

    // const getPokemons = ()=>{
    //     axios.get
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