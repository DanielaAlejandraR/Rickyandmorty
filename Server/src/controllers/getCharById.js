const axios = require("axios"); 


const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then( response => response.data)
    .then(({name, gender, species, origin, image, status }) => { // Destructuring de data 
        const character ={
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        return res
            .writeHead(200, {"content-type": "application/json"})
            .end(JSON.stringify(character))    
    })
    .catch( error => {
        return res.writeHead(500, {"context-type": " text/plain"})
        .end(error.message)
    })
}

module.exports = {
    getCharById
};