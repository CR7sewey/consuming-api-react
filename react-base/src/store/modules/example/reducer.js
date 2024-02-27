import * as types from '../types';

const initialState = {
  botaoClicado: false,
}
// retorno estado
// ta a ouvir todas as acoes disparadas
export default function reducer(state = initialState, action) {

  switch(action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('ESTOU na sucesso');

      const newState = {...state};
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('ESTOU na failure');
      return state;

    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('ESTOU fazendo a requisicao');
      return state;
    }
    default: {
      return state;
    }
  }
}
