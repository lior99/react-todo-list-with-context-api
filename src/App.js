import List from './components/List';
import { TodoItemsProvider } from './context/TodoItemsContext';

const App = () => {
  return (
    <TodoItemsProvider>
      <List />
    </TodoItemsProvider> 
  );
}

export default App;
