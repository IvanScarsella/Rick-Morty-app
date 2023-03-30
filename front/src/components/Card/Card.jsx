import { Link } from "react-router-dom"
import styled from 'styled-components';
import styles from './Card.module.css';
import { connect, useDispatch } from "react-redux";
import { removeFavorite, getFavorites } from "../../redux/actions";
import axios from "axios";
import { useEffect, useState } from 'react';
import React from "react";

function Card({id, name, species, gender, image, onClose, addFavorites, removeFavorites, myFavorites}) {
   const [ isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   
const addFavorite = (character) => {
   axios.post("http://localhost:3001/rickandmorty/fav", character)
   .then((res) => console.log("ok"));
};

const removeFavorite = async (id) => {
   await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
   dispatch(getFavorites());
   alert("Eliminado con éxito");
};

function handleFavorite(){   // Si el estado isFav es true, entonces settea ese estado en false, y despacha la función deleteFavorite que recibiste por props pasándole el ID del personaje como argumento.
   if(isFav){
      setIsFav(false);
      removeFavorites(id)
   } else {                  // Si el estado isFav es false, entonces settea ese estado en true, y despacha la función addFavorite que recibiste por props, pasándole props como argumento.
      setIsFav(true);
      addFavorites(id, name, species, gender, image)
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={styles.container}>
         { isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}
       <button onClick={() => onClose(id)} className={styles.closeButton}>X</button>
       <Link to={`/detail/${id}`}>
       <h2 className={styles.name}>Name: {name}</h2>
       </Link>
       <img  src={image} alt="" />
       <h2 className={styles.species}>Species: {species}</h2>
       <h2 className={styles.gender}>Gender: {gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => { // dispatchToProps está fuera del componente porque está por fuera de la funcion Card
   return{
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      },
   }
};

const mapStateToProps = (state) => {
   return {
      favorites: state.favorites,
   };
};

export default connect(null, mapDispatchToProps)(Card);