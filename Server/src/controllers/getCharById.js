const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios");

const getCharById = async (req, res) => {
   try{
    const{id} = req.params;
    const {data} = await axios(`${URL}/${id}`)

    if(!data.name)throw new Error(`Faltan datos del personaje con ÌD: ${id}`);//si no se encontro a un personaje lanzamos error
    
        const character ={//creo personaje 
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin, 
            image: data.image, 
            gender: data.gender,
            status: data.status
            }
        return res.status(200).json(character)//envio personaje por respuesta

   } catch(error){//Evaluamos error que viene por parametro, error es un objeto 
        return error.message.includes("ID")//si error incluye el string 
       ?res.status(404).send(error.message)
       :res.status(500).send(error.response.data.error)//si no incluye entra error 500
   }   
}


module.exports ={
    getCharById
}