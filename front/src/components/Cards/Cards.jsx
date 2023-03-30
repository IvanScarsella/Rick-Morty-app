import Card from '../Card/Card'
import styles from './Cards.module.css'
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/actions';
import { useEffect } from 'react';
import { orderCards, filterCards} from "../../redux/actions";

export default function Cards({characters, onClose}) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getFavorites());
   }, []);
   return (
   <div className={styles.divContainer}>
      <div>
                    <select onChange={orderCards}>
                        <option name="order" disabled='disabled'>OrderBy</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendnete</option>
                    </select>
                    <select onChange={filterCards}>
                        <option name="filter" disabled='disabled'>OrderBy</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
      {characters.map(({id, name, species, gender, image }) => {
      return (
      <Card 
         key={id}
         id={id}
          name={name} 
          species={species}
          gender={gender}
          image={image}
          onClose={onClose} // recibe onClose y se la manda a Card
       />
       );
      })}
   </div>
   );
}
