import './style.css';

const ListItem = props => {
    const { item, onItemClick } = props;
    const { text, isComplete } = item;

    const className = [
        'description',
        isComplete ? 'complete' : '',
    ].join(' ')

    const attrs = { checked: isComplete};

    const onItemChange = () => {
        console.log('you clicked on the checkbox');
    }

    return (
        <li className="list-item" onClick={() => onItemClick(item)}>
            <input type="checkbox" name="checkboxItem" onChange={() => null} { ...attrs } /> 
            <label htmlFor="checkboxItem" className={className}>{ text }</label>
        </li>
    );
}

export default ListItem;

// onChange={() => onItemClick(item)}/>