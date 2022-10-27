import React, { useState } from 'react';
import './reset.css';
import './App.css';
import Form from './Components/FormComponent/Form';
import CepInfo from './Components/CepInfo/CepInfo';
import CepInfoContext from './contexts/CepInfoContext';

const App = () => {
  const [cepInfo, setCepInfo] = useState({});
  console.log(cepInfo);

  return (
    <CepInfoContext.Provider value={{cepInfo, setCepInfo}}>
      <main className='app-wrapper'>
        <h1>Bem vindo(a)!</h1>
        <Form />
        <CepInfo />
      </main>
    </CepInfoContext.Provider>
  );
};

export default App;
