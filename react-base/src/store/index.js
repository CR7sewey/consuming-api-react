import {legacy_createStore as createStore} from 'redux'
import rootReducer from './modules/rootReducer';
// recebe o reducer, que escuta as açoes que estao sendo disparadas e executa uma acap
const store = createStore(rootReducer);

export default store;
