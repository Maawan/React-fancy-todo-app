import logo from './logo.svg';
import './App.scss';
import SearchBar from './Components/SearchBar';
import TodoList from './Components/TodoList';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <h3>To-Do List 🏦</h3>
      <SearchBar />
      <TodoList />
    </div>
    </Provider>
  );
}

export default App;
