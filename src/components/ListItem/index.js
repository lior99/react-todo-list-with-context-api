import './style.css';

const ListItem = props => {
    const { item, onItemClick } = props;
    const { text, isComplete } = item;

    const className = isComplete ? 'complete' : '';

    return (
        <li className="list-item" onClick={() => onItemClick(item)}>
            <span className={className}>{ text }</span>
        </li>
    );
}

export default ListItem;