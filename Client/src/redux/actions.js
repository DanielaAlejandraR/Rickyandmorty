import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";
import axios from "axios";

export const addFavorite = (character) => {
  
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try{
         const { data } = await axios.post(endpoint, character) 

         if(!data.length) throw Error("No hay favoritos")

         return dispatch({
               type: ADD_FAVORITES,
               payload: data,
         });
      }catch (error){
         console.log(error.message);
      }
    };
 };


export const deleteFavorite = (id)=> {
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id; //ruta servidor
        return async (dispatch) => {
         try{
            const {data} = await axios.delete(endpoint);

        //if(!data.length) throw Error("No hay favoritos")

            return dispatch({
               type:DELETE_FAVORITE ,
               payload: data,
         });
         }catch(error){
            console.log(error.message);
         }
        };
     };


export const order = (id)=> {
    return {
        type: ORDER,
        payload: id
    }
}

export const filter = (gender)=> {
    return {
        type: FILTER,
        payload: gender
    }
}

