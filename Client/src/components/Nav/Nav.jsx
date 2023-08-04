import SearchBar  from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const  Nav = ({onSearch, random}) => {

    return (
        <div className={style.container}>
            <div className={style.navTop}>
                <SearchBar onSearch={onSearch} />
            </div>
            <div className={style.navBottom}>
                <Link to="/home" className={style.link}>Home</Link>
                <Link to="/about" className={style.link}>About</Link>
                <Link to='/favorites' className={style.link}>Favorites</Link>
                <button onClick={random} className={style.link}>ADD RANDOM</button>
            </div>
        </div>
    )
}

export default Nav;