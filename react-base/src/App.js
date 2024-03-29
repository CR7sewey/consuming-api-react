import React from 'react';
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/index';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
    </PersistGate>
    </Provider>

  );
}

export default App;
