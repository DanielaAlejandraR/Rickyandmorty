import SearchBar  from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const  Nav = ({onSearch}) => {

    return (
        <div>
            <button className={style.Button}> 
                 <Link to="/home">Home</Link></button>    
            <button className={style.Button}>
                <Link to ="/about">About</Link> </button>   
                
                < SearchBar onSearch={onSearch}/>  
        </div>
    )
}

export default Nav;