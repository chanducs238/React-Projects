import './App.css';
import { Provider } from 'react-redux'
import FuntionBased from './Redux/FunctionBased';
import {store} from './Redux/store';

function App() {

  store.subscribe(() => console.log(store.getState()));
  return (
    <div className="App">
      <Provider store={store}>
      <FuntionBased />
      </Provider>
    </div>
  )
}

export default App;
