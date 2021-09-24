import './App.css';
import { CPriceContainer } from './components';
import {Provider} from 'react-redux';
import {store} from "./redux";

function App() {
  return (
    <Provider store = {store}>
      <div className="flex column">
        <h1 className="flex center">Prices</h1>
        <CPriceContainer/>
      </div>
    </Provider>
  );
}

export default App;

//module.exports = App;
