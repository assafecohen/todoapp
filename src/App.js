import React from 'react';
import Header from './components/Header/Header'
import TodoApp from './containers/TodoApp/TodoApp'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoApp/>
    </div>
  );
}

export default App;
