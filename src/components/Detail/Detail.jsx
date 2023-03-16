import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const Detail = () => {
    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => { // useEffect va a tener una callback y un array
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "720ca497289a.c2ab8305c006cee21c64";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`) // axios no necesita el .then con .json
        .then((response) => 
        setCharacter(response.data)
        );    
    }, []); 

    return (
        <div>
            {character.name ? ( // pregunto si character existe, si es asi, muestro lo de abajo
                <>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>     
            <p>{character.gender}</p> 
            <p>{character.origin?.name}</p> 
            <img src={character.image} alt="img" />
                </>
            ) : (
                <h3>Loading...</h3> // si character no está muestro loading... // el ? en origin ? permite que la aplicacion espere a encontrar ese dato para ejecutar el resto del código, sino dará un erorr "cannot read properties of undefined"
                )}
            </div>// origin es un objeto que dentro tiene name, eñ ? sirve para que muestre la propiedad una vez que fue encontrada
            );
};

export default Detail;