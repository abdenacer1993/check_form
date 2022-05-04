import React from 'react';
import { Header } from './component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form  from './component/form/Form';

function App() {
  return (
    <div className="App">
        <Header />
        <Form />
    </div>
  );
}

export default App;
