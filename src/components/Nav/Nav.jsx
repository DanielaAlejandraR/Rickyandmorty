import SearchBar  from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const  Nav = ({onSearch, random}) => {

    return (
        <div className={style.container}>
        <SearchBar onSearch= {onSearch}/>
        <Link to="/home"  className={style.link}> Home </Link> 
        <Link to="/about" className={style.link}> About </Link> 
        <Link to='/favorites' className={style.link}>Favorites</Link>
            

         <button onClick={random} className={style.link}>ADD RANDOM</button>

        <img className={style.img} src='https://1.bp.blogspot.com/-AvVxtmDEbCw/YRQjDiXFhCI/AAAAAAABAR8/lNQZ_fg-C9UXdoNkqJ3uVOwANlu7S_ZAACLcBGAsYHQ/s3200/tipografia-rick-y-morty.jpg' width='20%'/>

            
        </div>
    )
}

export default Nav;