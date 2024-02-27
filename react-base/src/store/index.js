import {legacy_createStore as createStore} from 'redux'

const initialState = {
  botaoClicado: false,
}
// retorno estado
// ta a ouvir todas as acoes disparadas
const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'BOTAO_CLICADO': {
      const newState = {...state};
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default: {
      return state;
    }
  }
};

// recebe o reducer, que escuta as açoes que estao sendo disparadas e executa uma acap
const store = createStore(reducer);

export default store;
