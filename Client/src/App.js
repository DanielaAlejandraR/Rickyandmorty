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

const URL = 'http://localhost:3001/rickandmorty/login/';//esta url es nuestro back 

function App() {
  const[ characters, setCharacters ]= useState([]);
  const[ access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  const login = async (userData) => {
    try{
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
          
        setAccess(data)
         access && navigate('/home');
      }
    catch(error){
      console.log(error.message);
    }
  }

    useEffect(() => {
      !access && navigate('/');
  }, [access]);

  
  const onSearch = async (id) => {
    try{
      
      const{ data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
     
            const characterFind = characters.find((char) => char.id === Number(id))
  
            if(characterFind) {
              alert('Already in the list!')
            }
            
            else if(data.id !== undefined) {
              setCharacters((character) => [...character, data]);
            }
          }
        catch (error){
          console.log('soy el catch', error);
          alert('Intenta con otro ID')

         }
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
    fetch(`http://localhost:3001/rickandmorty/character/${random}`)
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

