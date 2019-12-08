import React, {Fragment} from 'react';
import classes from './TodoListItem.module.css';
const TodoListItem = (props) => {
  const {index , removeItem} = props;
  return (
    <li className = {classes.TodoListItem}
        onClick={() =>{ removeItem(index) }}>
        {props.item.value}
    </li>
  );
}

export default TodoListItem;
