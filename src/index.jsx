import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/pagina1/App';
import Pagina2 from './pages/pagina2/App';
import Exercicio1 from './pages/exc1/App';
import Exercicio2 from './pages/ex2/App';
import Exercicio3 from './pages/ex3/App';
import Exercicio4 from  './pages/ex4/App'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
    
         <Routes>

           <Route path='/'element={<App />}/>
           <Route path='/sobre'element={<Pagina2 />}/>
           <Route path='/exercicio1'element={<Exercicio1 />}/>
           <Route path='/exercicio2'element={<Exercicio2 />}/>
           <Route path='/exercicio3'element={<Exercicio3 />}/>
           <Route path='/exercicio4'element={<Exercicio4 />}/>
         </Routes>
    
    
      </BrowserRouter>

  </React.StrictMode>
);

