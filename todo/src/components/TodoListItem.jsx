import Button from './ui/DeleteButton';

function TodoListItem(props) {
  console.log(props);
  const { item, onDelete } = props;
  return (
    <li
      style={{
        padding: '5px',
        margin: '2px',
        border: '1px solid gray',
        borderRadius: '5px',
      }}
    >
      <div className="row">
        <div className="col-8">{item}</div>
        <div className="col">
          <Button type="danger" label="Delete" onClick={onDelete} />
        </div>
      </div>
    </li>
  );
}

export { TodoListItem };
