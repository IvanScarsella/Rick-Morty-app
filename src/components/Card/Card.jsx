import styled from 'styled-components';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFavorites } from '../../redux/actions';
import { connect } from "react-redux";

function Card({id, name, species, gender, image, onClose, addFavorites, removeFavorites}) {
   const [ isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector((estado) => estado.myFavorites);
   
function handleFavorite(){
   if(isFav){
      setIsFav(false);
      removeFavorites(id)
   } else {
      setIsFav(true);
      addFavorites(id, name, species, gender, image, onClose, addFavorites, removeFavorites)
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
      <button onClick={()=>handleFavorite(id)}>❤️</button>
   ) : (
      <button onClick={()=>handleFavorite(id)}>🤍</button>
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
      addFavorites: (character) => {
         dispatch(addFavorites(character))
      },
      removeFavorites: (character) => {
         dispatch(removeFavorites(character))
      },
   }
};

export default connect(null, mapDispatchToProps)(Card);