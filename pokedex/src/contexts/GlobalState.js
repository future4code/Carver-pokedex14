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




    //PEGA POKEMONS

    const getPokemons = ()=>{
        const newArray = []

        for(let i = 1; i <= 20; i++){
            axios.get(`${newPokemon}/${i}`)
        .then(res=>{
            newArray.push(res.data)
            // setPokemons(res.data)
            // console.log(newArray)
            if(newArray.length === 20){
                const ordem = newArray.sort((a, b)=>{
                    return a.id - b.id
                })
                console.log(ordem)
                setPokemons(ordem)
            }
        }).catch(err =>{
            console.log(err.response)
        })
        }
        
    }


//ANTIGA

    // const getPokemons = ()=>{
    //     axios.get(newPokemon)
    //     .then(res=>{
    //         setPokemons(res.data)
    //         console.log(res.data)
    //     }).catch(err =>{
    //         console.log(err)
    //     })
    // }






    //FUNÇÃO QUE AICIONA POKEMON (BOTÃO)



//ANTIGA, SÓ EXCLUIR QUANDO TUDO ESTIVER FUNCIONANDO, KKKK
    // const addPokemon =(newPoke)=>{
        
    //     const adicionaPoke = pokedex.findIndex(
    //         (i)=> {
    //           return i.name === newPoke.name
    //         })

    //     const newList = [...pokedex]

    //     if(adicionaPoke === -1){
    //         newList.push({...newPoke, amount: 1})
    //         console.log(states.pokedex[adicionaPoke])
    //     }else{
    //         console.log('Pokemon já adicionado')
    //     }
    //     setPokedex(newList)
    //     console.log(pokedex)

    // }

//NOVA, YYYEAHHH!

    const addPokemon = (newPoke)=>{
        const index = pokemons.findIndex((i)=> i.name === newPoke.name)
        const newList = [...pokemons]
        newList.splice(index, 1)
        const ordem = newList.sort((a, b)=>{
            return a.id - b.id
        })
        const newPokedex = [...pokedex, newPoke]
        const ordemPokedex = newPokedex.sort((a, b)=>{
            return a.id - b.id
        })
        setPokemons(ordem)
        setPokedex(ordemPokedex)
        console.log(pokemons)
        console.log(pokedex)
    }





    //REMOVE DA POKEDEX


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





    // FUNÇÃO DE DETALHE NÃO ESTÁ SENDO UTILIZADA

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




    //CHAMA AS FUNÇÕES
    const requests = {getPokemons, getDetail, addPokemon, removePokedex}


    //CHAMA ESTADOS
    const states = {pokemons, details, url, pokedex}


    //CHAMA OS SETS
    const setters = {setPokemons, setNewPokemon, setUrl, setPokedex}


    //CHAMA AS TRÊS ACIMA
    const datas = {requests, states, setters}


    return(
        //ISSO ENVIA PRO APP.JS 
        <GlobalContext.Provider value={datas}> 
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState