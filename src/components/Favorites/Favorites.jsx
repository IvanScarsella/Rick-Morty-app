import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return(
        <>
                <div>
                    <select onChange={handleOrder}>
                        <option name="order" disabled='disabled'>OrderBy</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendnete</option>
                    </select>
                    <select onChange={handleFilter}>
                        <option name="filter" disabled='disabled'>OrderBy</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
        {favorites.map(({ id, name, species, gender, image }) => {
            return (
                <Card 
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                />
            );
        })}
        </>
    );
};

export default Favorites;