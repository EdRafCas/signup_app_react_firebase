import React from 'react';
import styled from 'styled-components';
import Formulario from './Componentes/Formulario';
import ListaContactos from './Componentes/ListaContactos';

const App = () => {
      return ( 
            <Contenedor>
                  <Titulo>
                        Hello World
                        <Formulario />
                        <ListaContactos />
                  </Titulo>
            </Contenedor>
       );
}

const Contenedor = styled.div`
      margin: 40px;
      width: 90%;
      max-width: 400px;
      background: #fff;
      padding: 40px;
      border-radius: 5px;
      text-align: center;
`;

const Titulo = styled.h2`
      margin-bottom: 10px;
`;


export default App;