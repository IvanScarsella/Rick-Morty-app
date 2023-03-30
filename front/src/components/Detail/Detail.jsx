import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
    const character = useCharacter();

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
            </div>// origin es un objeto que dentro tiene name, el ? sirve para que muestre la propiedad una vez que fue encontrada
            );
};

export default Detail;