import Card from '../Card/Card'
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
   <div class={styles.divContainer}>
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
