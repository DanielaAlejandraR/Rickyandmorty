import "./App.css"
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/about.jsx";
import Detail from "./components/detail/detail.jsx";
import Form from "./components/Form/Form";
import ErrorPage from "./components/Error/errorPage";
import Favorites from "./components/Favorites/favorites";


function App() {
  const[ characters, setCharacters ]= useState([]);
  const[ access, setAccess] = useState(false);

  const email = "ale@gmail.com";
  const password = "123abcd";
  
  const location = useLocation();
  const navigate = useNavigate();

  const login =(userData) =>{
    if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate("/home");
    }
  }

    useEffect(() => {
      !access && navigate('/');
  }, [access]);

  
  function onSearch(id) {
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
    setCharacters(charactersFiltered);
   }
  
   function randomHandler(){
    let haveIt= [];
    let random = (Math.random()* 826).toFixed();
    random = Number(random);

    if(!haveIt.includes(random)){
      haveIt.push(random);
    fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response) =>  response.json())
      .then((data) => {
        if(data.name){
          setCharacters((oldChars) => [...oldChars, data]);
        }else{
          window.alert("No hay personaes con ese ID");
        }
      });
    }else{
      console.log("Ya agregaste todos los personajes");
      return false;
    }
   }
  

  return (
    <div className="App">
      {
        location.pathname !== "/" && <Nav onSearch ={onSearch} random={randomHandler} />
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
      <Route 
        path ="/favorites" 
        element={<Favorites/>}/>     

      <Route 
        path ="*" 
        element={<ErrorPage/>}/>
  
      </Routes>
     </div>
  );
}

export default App;
