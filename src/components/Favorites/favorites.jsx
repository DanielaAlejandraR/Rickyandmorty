import { connect } from "react-redux";
import Card from "../../components/Cards/Cards"

const Favorites = ({myFavorites}) => {
    return(
    <div>
        <h2> My Favorites</h2>
            <Card characters={ myFavorites} />
    </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default  connect (mapStateToProps, null)(Favorites);