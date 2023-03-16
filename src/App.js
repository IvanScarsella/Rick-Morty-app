import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx';
import style from './App.module.css'
import { useEffect, useState } from 'react'
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import About from './components/About/About.jsx';
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form"

function App () {
  // Hooks
const [characters, setCharacters] = useState([]); // [] es el valor inicial, puede ser lo que sea dependiendo el contexto
const { pathname } = useLocation();
const [access, setAccess] = useState(false);
const navigate = useNavigate();


// Credenciales
const username = "scarsellaivan@gmail.com";
const password = "Ivan123";


  // Event handlers
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "720ca497289a.c2ab8305c006cee21c64";
    
    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`) // id busca al personaje con ese identificador
    .then((response) => response.json()) // la respuesta se convierte en un objeto tipo json para poder trabajar con él
    .then((data) => { // data es el personaje
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]); // oldCharsa toma el valor previo y le agrega data, que sería el personaje solicitado
      } else {
        alert("Algo salió mal");
      }
    })
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id)); // filter no modifica el array original, retorna un array nuevo con los elementos que hayan pasado el filtro
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    };
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // Render
  return (
    <div className="App" style={{ padding: '25px' }}>
      <div className={style.Nav}>
        {pathname !== "/" && <Nav onSearch={onSearch} />}
        <Routes> 
          <Route path="/" element={<Form login={login} />} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} // le manda la funcion onClose a Cards para que la ejecute en cada Card
          /> 
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
        </div>
       </div>
  );
}

export default App
