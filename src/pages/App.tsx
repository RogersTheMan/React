import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Style from "./App.module.scss"
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={Style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
