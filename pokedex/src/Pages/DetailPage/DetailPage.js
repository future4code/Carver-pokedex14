import React, { useContext, useEffect, useState } from 'react'
import URL from '../../constants/url'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import GlobalContext from '../../contexts/GlobalContext'

function DetailPage() {
  const [pokemonDetails, setPokemonDetails] = useState([])

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = () => {
    const list = []
    const organizerList = list.sort()
    for (let i = 1; i <= 20; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => {
          list.push(response.data)
          if (organizerList.length === 20) {
            setPokemonDetails(organizerList)
          }
          console.log(list)
        })
        .catch(error => console.log(error.message))
    }
  }

  return <div></div>
}

export default DetailPage
