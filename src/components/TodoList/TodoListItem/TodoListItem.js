import React from 'react';
import classes from './TodoListItem.module.css';
const TodoListItem = (props) => {
  const {index, handleShowModal} = props;
  return (
    <li className = {classes.TodoListItem}
        onClick={() => handleShowModal(index)}>
        {props.item.value}
    </li>

  );
}

export default TodoListItem;
