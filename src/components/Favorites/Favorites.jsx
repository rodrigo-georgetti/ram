import React from 'react'
import {styles} from './Favorites.module.css'
import { connect } from 'react-redux'
import Card from '../Card/Card'
const Favorites = (props) => {
    const {myFavorites, onClose} = props
  return (
    <div>
      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites
    }
  }

export default connect(mapStateToProps, null)(Favorites)
