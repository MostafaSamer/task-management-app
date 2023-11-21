import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

const Root = () => {
   return <React.StrictMode>
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   </React.StrictMode>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Root />);