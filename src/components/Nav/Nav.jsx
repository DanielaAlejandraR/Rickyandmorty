import SearchBar  from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const  Nav = ({onSearch, random}) => {

    return (
        <div>
            <SearchBar onSearch={onSearch}/>  

            <button className={style.Button}> 
                 <Link to="/home">Home</Link></button>    
            <button className={style.Button}>
                <Link to ="/about">About</Link> </button>   
            <button className={style.Button}>
                <Link to ="/favorites">Favorites</Link> </button>   
            

            <button onClick={random}>ADD RANDOM</button>

             <img className={style.img} src='https://1.bp.blogspot.com/-AvVxtmDEbCw/YRQjDiXFhCI/AAAAAAABAR8/lNQZ_fg-C9UXdoNkqJ3uVOwANlu7S_ZAACLcBGAsYHQ/s3200/tipografia-rick-y-morty.jpg' width='20%'/>

            
        </div>
    )
}

export default Nav;