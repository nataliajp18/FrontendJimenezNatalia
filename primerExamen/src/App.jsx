import React from "react";
import {useState} from "react";
import styles from "./app.module.css";
import Tarjeta from "./components/Tarjeta";

function App() {

  const [name, setName] = useState("");
  const [book, setbook] = useState("");
  const [error, setError] = useState("");
  const [send, setSend] = useState(false);

  const changeName = (e) => setName(e.target.value);
  const changebook = (e) => setbook(e.target.value);

  const validNameAndbook = (name,book) => {
    const spacesName = name.trim();
    return (spacesName.length >= 3 && book.length >= 6) ? true : false;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validNameAndbook(name,book)){
      setSend(true)
      setError("")
    }else{
      setError("Por favor verifica que la información que ingresaste sea correcta")
      setSend(false);
    }
  }

  return (
    <div className={styles.formulario}>

      <h2>Bienvenido!</h2>

      <form className = {styles.contenedorForm} onSubmit={handleSubmit}>

        <input type="text" placeholder="Por favor ingresa tu nombre" value={name} onChange={changeName}/>
        <input type="text" placeholder="Por favor ingresar tu libro preferido" value={book} onChange={changebook}/>
        <button type="submit">Enviar</button>

      </form>

      <p>{error}</p>

      {send ? <Tarjeta nombreIngresado = {name} libroIngresado = {book}/> : ""}  
    </div>
  );
}

export default App;
