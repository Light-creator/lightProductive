import React from 'react';
import { Route, Routes } from "react-router-dom";
import Gtd from './components/GTD/gtd';
import "./App.sass";
import Header from './components/layout/Header';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/gtd' element={ <Gtd /> }/>
      </Routes>
    </div>
  );
}

export default App;
