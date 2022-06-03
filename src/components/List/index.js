import { useContext  } from 'react';
import ListItem from '../ListItem';
import { TodoItemsContext } from '../../context/TodoItemsContext';

const List = () => {
    const { items, setTodoItems } = useContext(TodoItemsContext)

    const toggleComplete = item => {
        item.isComplete = !item.isComplete;

        const itemPosition = items.findIndex(el => el.id === item.id);
        if (itemPosition !== -1) {
            const newItems = [
                ...items.slice(0, itemPosition),
                item,
                ...items.slice(itemPosition + 1)
            ]

            setTodoItems(newItems);
        }
    }

    return (
        <ul>
            { items.map((item, index) => (
                <ListItem key={`item_${index}`} item={item} onItemClick={() => toggleComplete(item)}/>
            ))}
        </ul>
    )
}

export default List;