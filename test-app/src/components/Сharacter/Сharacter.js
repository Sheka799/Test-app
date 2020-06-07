import React from 'react'
import {NavLink} from 'react-router-dom'
import './Character.scss'


function Character (props) {
    return (
      <div className="character-wrapper">
    <h1 className="character-title">{props.location.state.name}</h1>
    <p className="character-info"><span className="character-span">Birth year:</span> {props.location.state.birth_year}</p>
    <p className="character-info"><span className="character-span">Gender:</span> {props.location.state.gender}</p>
    <p className="character-info"><span className="character-span">Homeworld:</span> {props.location.state.homeworld}</p>
    <p className="character-info"><span className="character-span">Height:</span> {props.location.state.height}</p>
    <p className="character-info"><span className="character-span">Mass:</span> {props.location.state.mass}</p>
    <p className="character-info"><span className="character-span">Hair color:</span> {props.location.state.hair_color}</p>
    <p className="character-info"><span className="character-span">Skin color:</span> {props.location.state.skin_color}</p>
    <p className="character-info"><span className="character-span">Eye color:</span> {props.location.state.eye_color}</p>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </ul>
    </div>
    
    )
  }


export default Character