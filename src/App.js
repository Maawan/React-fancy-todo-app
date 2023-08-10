import logo from './logo.svg';
import './App.scss';
import SearchBar from './Components/SearchBar';
import TodoList from './Components/TodoList';
import { Provider } from 'react-redux';
import store from './store';
import Card from './Components/Card';
function App() {
  return (
    <Provider store={store}>
    <Card />
    </Provider>
  );
}

export default App;
