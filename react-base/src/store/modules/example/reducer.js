const initialState = {
  botaoClicado: false,
}
// retorno estado
// ta a ouvir todas as acoes disparadas
export default function reducer(state = initialState, action) {

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
}
