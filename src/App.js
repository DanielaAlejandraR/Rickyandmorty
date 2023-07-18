import "./App.css"
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/detail/detail.jsx";
import About from "./components/About/about.jsx";
//import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Form from "./components/Form/Form";

const email = "ale@gmail.com";
const password = "123abcd";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const[ characters, setCharacters ]= useState([]);
  const[access, setAccess] = useState(false);

  const login =(userData) =>{
    if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate("/home");
    }
  }

    useEffect(() => {
      !access && navigate('/');
  }, [access]);

  const onSearch= (id)  =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
          const characterFind = characters.find((char) => char.id === Number(id))
          console.log('metodo find',characterFind);

          if(characterFind) {
            console.log('entre al if, ya esta en la lista', characterFind);
            alert('Already in the list!')
          }
          
          else if(data.id !== undefined) {
            setCharacters((character) => [...character, data]);
          }
        })

        .catch((error)=> {
          console.log('soy el catch', error);
          alert('Intenta con otro ID')
        })
   }

   const onClose = (id) => {
    const charactersFiltered = characters.filter(character => character.id !== Number(id))
    setCharacters(charactersFiltered)
   }
  
  return (
    <div className="App">
      {
        location.pathname !== "/" && <Nav onSearch ={onSearch} />
      }

      <Routes>
       <Route
       path="/"
       element={<Form login={login}/>}
       />  
      <Route 
        path="/home" 
        element={<Cards characters= {characters} 
        onClose={onClose}/>}/>
      <Route 
        path ="/about" 
        element={<About/>}/>
      <Route 
        path ="/detail/:id" 
        element={<Detail/>}/>
  
      </Routes>
     </div>
  );
}

export default App;
