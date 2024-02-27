import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './action';
import * as types from '../types';
import { toast } from 'react-toastify';

const requisicao = () => new Promise((resolve,reject) => {
  setTimeout(() => {
    const apagar = true;
    if (apagar){
    resolve();
    }
    reject();
  }
  ,2000);
});

function* exampleRequest() {
  try {
    yield call(requisicao); // tipo o await
    yield put(actions.clicaBotaoSuccess());
    toast.success('SUcesso', {
      toastId: 'successId',
    });
  }
  catch {
    yield put(actions.clicaBotaoFailure());
    toast.error('Erro', {
      toastId: 'erroId',
    });

  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST,exampleRequest)
]);
