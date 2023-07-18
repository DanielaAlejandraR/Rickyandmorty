import { Link } from 'react-router-dom';
import style from './card.module.css'; 

export default function Card({ id, name, species,status, gender, image, onClose}) {
   return (
     <div className={style.container}>
        <img src ={image} alt={name} className={style.cardImage} /> 
        

        <Link to={`/detail/${id}`}>
            <h2> {name} </h2>
         </Link>

         <h2>Species: {species}</h2>
         <h2>Status: {status}</h2>
         <h2>Gender: {gender}</h2>

         <button onClick={() => onClose(id)}
          className={style.closeButton}>Delete </button>
     </div>
   );
 }
 

//Esta va a ser mi plantilla 
