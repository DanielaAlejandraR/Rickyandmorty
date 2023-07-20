import{ useParams, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import style from './detail.module.css'

const Detail = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [character, setCharacter] = useState ({});

    useEffect(() => {// simula tres ciclos de vida
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        // .then es un metodo de promesa
          .then((response) => response.json()) // Nos brinda info de la api y la parseamos
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } 
            else {
              alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            alert("No hay personajes con ese ID");
          });

        return setCharacter({});
      }, [id]);

    const handleClick =()=> {
      navigate('/home')
    } 

  return (
      <>
        <button onClick={handleClick} className={style.homeButton}>Home</button>
           <h2>Detail</h2> 
           {
              character ? ( //? es un if
                  <div className={style.container}>
                     
                        <h2>Name {character.name}</h2>
                        <h2>Status: {character.status}</h2>
                        <h2>Specie: {character.species}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Origin: {character.origin?.name}</h2>
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