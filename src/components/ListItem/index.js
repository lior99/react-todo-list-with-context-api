import './style.css';

const ListItem = props => {
    const { item, onItemClick } = props;
    const { text, isComplete } = item;

    const className = [
        'description',
        isComplete ? 'complete' : '',
    ].join(' ')

    const attrs = { checked: isComplete };

    return (
        <li className="list-item">
            <input type="checkbox" name="checkboxItem" onChange={() => onItemClick(item)} { ...attrs } /> 
            <label htmlFor="checkboxItem" className={className} onClick={() => onItemClick(item)}>{ text }</label>
        </li>
    );
}

export default ListItem;
