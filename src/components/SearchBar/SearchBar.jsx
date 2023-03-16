import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState(""); // esto es lo que está escrito en la barra de búsqueda, en principio nada, para cambiar este valor tengo que llamar a setId

   const handleChange = (event) => { // esto modifica el valor de setId al valor ingresado
      setId(event.target.value);
   };

   return (
      <div className={styles.bar}>
         <input 
         type='search'
         className={styles.searchInput}
         onChange={handleChange}
         />
      <button className={styles.button}
      onClick={ () => // función que ejecuta a onSearch
         onSearch(id)
          }>Agregar</button>
      </div>
   );
}
