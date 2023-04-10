const axios = require('axios');
const { KEY, URL } = process.env; // las variables de entorno sirven para aumentar la seguridad de los datos, se suelen escribir en formato .env por fuera del código de la app

const getCharById = (req, res) => {
    const { id } = req.params; // de los parámetros obtengo solo el id
    // axios.get(`${URL}/character/${id}?key=${KEY}`)
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        const { id, name, species, image, gender } = response.data;
        res.status(200).json({ id, name, species, image, gender })
       
})
.catch((error) => {
    res.status(500).json({error:error.message})
})
}

module.exports = getCharById

// const successH = (response, res) => {
//     const {id, image, name, gender, species } = response.data;
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ id, name, grnder, species, image }))
// ;}

// const errorH = (error, res) => {
//     res.writeHead(500, {"Content-type": "text/plain "})
//     res.end(error.message)
// }

// const getCharById = (res, id) => { 
//     axios
//     .get(`${URL}/character/${id}?key=${KEY}`)
//     .then((response) => successH(response, res)) // .then devuelve u objeto con la propiedad data    
//     .catch((error) => errorH(error, res))
// }
