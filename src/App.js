import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import './App.css';
import store from './app/store';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
