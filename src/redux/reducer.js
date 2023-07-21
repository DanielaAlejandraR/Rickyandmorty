import { ADD_FAVORITES, DELETE_FAVORITE, ORDER, FILTER} from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters : [],
    genders: []
}

const reducer = (state=initialState, action) => {
switch(action.type){

    case ADD_FAVORITES:
        const copyCharacters = [...state.allCharacters, action.payload]
    return{
        ...state,//copia estado global
        myFavorites: copyCharacters,
        allCharacters: [...copyCharacters]
    }

    case DELETE_FAVORITE:
    return{
        ...state,
        myFavorites: state.myFavorites.filter((character) => character.id !== action.payload )
    }

    case FILTER:
        const filterCharacter = state.allCharacters.filter((character)=> character.gender === action.payload )
    return{
        ...state,
        myFavorites: filterCharacter,
    }

    case ORDER:
        const orderCharacter = state.allCharacters.sort((a, b) => {
            if(action.payload === 'Ascendente') {
                if(a.id < b.id) return -1
                if(b.id < a.id) return 1
                //si son iguales
                return 0
            }
            // Descendente
            else {
                if(a.id < b.id) return 1
                if(b.id < a.id) return -1
                //si son iguales
                return 0
            }
        })

        return {
            ...state,
            myFavorites: [...orderCharacter]
        }

    default:
        return{
            ...state
        }
    }
    }

export default reducer