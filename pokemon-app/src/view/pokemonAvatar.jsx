import { Avatar } from "@mui/material"
import React from "react"

const PokemonAvatar = ({pokemonImage,pokemonName})=>{

    return (
        <img 
            alt={pokemonName} src={pokemonImage} className="pokemon-img"
        />
    )
}

export default PokemonAvatar