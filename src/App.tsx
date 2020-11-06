import React from 'react';


import './App.scss';
import { Categories, Header } from './display/components';
import { Cards } from './display/components/Cards';


function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Cards/>
    </div>
  );
}

export default App;
