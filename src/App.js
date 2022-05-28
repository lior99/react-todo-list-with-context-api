import { useState, createContext } from 'react';
import List from './components/List';
import { TodoItemsProvider } from './context/TodoItemsContext';

function App() {
  return (
    <TodoItemsProvider>
      <List />
    </TodoItemsProvider> 
  );
}

export default App;
