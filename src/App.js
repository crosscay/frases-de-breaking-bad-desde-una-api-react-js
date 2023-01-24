import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: backgroud-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

 function App() {

    // state de frases
    const [ frase, guardarFrase ] = useState({});

    // Cargar UNA FRASE
    useEffect( ()=> {
      consultarAPI();
    }, []);

    const consultarAPI = async () => {
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
    console.log(frase[0]);
 }

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        // consultarAPI
        // () => consultarAPI()
        onClick={() => consultarAPI()}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
