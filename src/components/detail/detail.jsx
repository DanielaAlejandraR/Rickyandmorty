import axios from "axios"; 
import{ useParams, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import style from './detail.module.css'

const Detail = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [character, setCharacter] = useState ({});

    useEffect(() => {// simula tres ciclos de vida
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      // .then es un metodo de promesa
        // .then((response) => response.json()) // Nos brinda info de la api y la parseamos
        // .then((char) => {
        //   if (char.name) {
        //     setCharacter(char);
        .then(({ data }) => {
          if (data.name) {
             setCharacter(data);
          } 
          else {
            alert("No hay personajes con ese ID");
          }
        });
      return setCharacter({});
    }, [id]);

    const handleClick =()=> {
      navigate('/home')
    } 

  return (
      <>
           {/* <h2>Detail</h2> */}
           {
              character ? ( //? es un if
                  <div className={style.container}>
                      <button onClick={handleClick} className={style.homeButton}>Home</button>
                    <div className={style.text}>
                    <h2> {character.name}</h2>
                      <h2>Status: {character.status}</h2>
                      <h2>Specie: {character.species}</h2>
                      <h2>Gender: {character.gender}</h2>
                      <h2>Origin: {character.origin?.name}</h2>

                    </div>
                      <img src={character.image} alt={character.name} className={style.cardImage} />

                  </div>
              ) : (
                  ''
              )
          }
      </>
  )
}

export default Detail;