
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Menu from './layout/Menu';
import Content from './layout/Content';

function App() {
  return (
        <div className='App'>
            <BrowserRouter>
                <Menu/>
                <Content/>  
            </BrowserRouter>
        </div>
    );
}
export default App;
