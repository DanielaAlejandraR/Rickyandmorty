import style from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar(props) {
  const { onSearch } = props
  const [id, setId ] = useState('')

  const handlerEnter = (event) => {
     if(event.key === 'Enter') {
        onSearch(id)
        setId('')
     }
  }   

   const  handleChange = (event) => {
      setId(event.target.value)
   }


  return (
    <div className={style.container}>
      <input 
      type= "text" 
      placeholder="Search character..." 
      className={style.Input} 
      onChange={handleChange} 
      value={id}
      onKeyUp={handlerEnter}
      />

      <button onClick={()=> onSearch(id) } className={style.searchButton}>Add</button>
    </div>
  );
}
