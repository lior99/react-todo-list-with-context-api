import { useState, createContext } from 'react';

const initalTodos = [
    { id: 1, text: 'some task', isComplete: false },
    { id: 2, text: 'Drink coffee', isComplete: false },
    { id: 3, text: 'Go outside', isComplete: true }
];

const TodoItemsContext = createContext();

const TodoItemsProvider = ({ children }) => {
    const [items, setTodoItems] = useState(initalTodos);

    return (
        <TodoItemsContext.Provider value={{items, setTodoItems}}>
            {children}
        </TodoItemsContext.Provider>
    )
}
export { TodoItemsContext, TodoItemsProvider };