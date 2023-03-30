const axios = require("axios");
const { KEY, URL} = process.env;

const getCharDetail = (req, res) => {
    const { id } = req.params; // de los parámetros obtengo solo el id

    axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then(response => {
        const { id, name, species, image, gender, origin } = response.data;
        res.status(200).json({ id, name, species, image, gender, origin })
        .catch((error) => {
            res.status(500).json({ error:error.message })
    })
})
}

// const successH = (response, res) => {
//     const { image, name, gender, status, species, origin } = response.data;
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ name, gender, status, species, origin, image }))
// ;}

// const errorH = (error, res) => {
//     res.writeHead(500, {"Content-type": "text/plain "})
//     res.end(error.message)
// }

// const getCharDetail = (res, id) => {
//     axios
//     .get(`${URL}/character/${id}?key=${KEY}`)
//     .then((response) => successH(response, res)) // .then devuelve u objeto con la propiedad data    
//     .catch((error) => errorH(error, res))
// }

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data) // .then devuelve u objeto con la propiedad data
//     .then(data => {
//         let character = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin.name
//         }
//         res
//         .writeHead(200, {'Content-type': 'application/JSON'})
//         .end(JSON.stringify(character))
//     })
//     .catch(error => 
//         res.writeHead(500, {'Content-type': 'text/plain'})
//         .end(`el personaje con el id: ${id} no fue encontrado`))
// }

module.exports = getCharDetail