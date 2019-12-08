import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem'
import classes from './TodoList.module.css'

const TodoList = (props) => {
  const { handleShowModal } = props
  let items = props.items.map((item, index) => {
    return <TodoListItem
            key = {index}
            index = {index}
            item = {item}
            handleShowModal = {handleShowModal}
            />
  });

  return (
    <ul className = {classes.TodoList}>
      {items}
    </ul>
  );

}

export default TodoList;
