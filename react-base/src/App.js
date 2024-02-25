import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Header />
    <Routes />
    <GlobalStyles />
    </BrowserRouter>

  );
}

export default App;
