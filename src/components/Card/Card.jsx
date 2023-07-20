import style from './card.module.css'; 
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card({ id, name, species,status, gender, image, onClose, deleteFavorite, addFavorite, myFavorites}) {
  const [isFav, setIsFav] = useState(false);

  const{ pathname } = useLocation()

  const handleFavorite =() => {
    if(isFav){
      setIsFav(false)
      deleteFavorite(id)
    }else{
      setIsFav(true)
      addFavorite({id, name, species, gender, image})
    }
  }

useEffect(() => {
  myFavorites.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [myFavorites]);

   return (
     <div className={style.container}>
        <img src ={image} alt={name} className={style.cardImage} /> 
        

        <Link to={`/detail/${id}`}>
            <h2> {name} </h2>
         </Link>
        
        
      <div className={style.containerTitle}>
         <h2>Species: {species}</h2>
         <h2>Status: {status}</h2>
         <h2>Gender: {gender}</h2>
       </div>

        {
          isFav ? (
              <button onClick={handleFavorite} className={style.btnFav}>❤️</button>
          ) : (
              <button onClick={handleFavorite} className={style.btnFav}>🤍</button>
          )
        }

        {
          !pathname.includes('/favorites') &&
         <button onClick={() => onClose(id)}
          className={style.closeButton}>Delete </button>
        }
     </div>
   );
 }
 

const mapsStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addFavorite: (character) => dispatch(addFavorite(character)),
    deleteFavorite: (id) => dispatch((deleteFavorite(id)))
  }
}



export default connect(mapsStateToProps, mapDispatchToProps)(Card)