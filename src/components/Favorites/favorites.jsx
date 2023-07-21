import { connect } from "react-redux";
import Card from "../../components/Cards/Cards"
import style from './Favorites.module.css'
import { useDispatch } from "react-redux"
import { order, filter } from "../../redux/actions"

const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch()

    const handleOrder = (evento)=> {
        dispatch(order(evento.target.value))
    }

    const handleFilter = (evento)=> {
        dispatch(filter(evento.target.value))
    }


    return(
    <>

        <h2> My Favorites</h2>

       <div>
            <select onChange={handleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                {
                    ['Male', 'Female', 'Genderless', 'unknown'].map((gender, index)=> {
                        return (
                           <option 
                            key= {index}
                            value={gender} 
                           >
                                {gender}
                            </option> 
                        )
                    })
                }
                 </select>
            
            </div>
    
            {
                myFavorites.length === 0 ? (
                    <h3 className={style.title}>Empty favorites list! </h3>
                ) :
                (
                    <Card characters = { myFavorites }/>
                )
            }
            </>
    );
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default  connect (mapStateToProps, null)(Favorites);