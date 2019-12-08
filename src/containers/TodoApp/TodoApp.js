import React, { Component } from 'react'
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../../components/TodoForm/TodoForm'

class TodoApp extends Component {

  state = {
    todoItems: [
      {index: 1, value: "Learn React"},
      {index: 2, value: "Learn CSS"}
    ]
  }
  addItem = (todoItem) => {
    let todoItems = [...this.state.todoItems];
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
    });
    this.setState({todoItems: todoItems});
  }
  removeItem = (itemIndex) => {
    const check = window.confirm('Task will be deleted, Are you sure?');
    if(check){
      let todoItems = [...this.state.todoItems];
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }
    return true;
  }
  render() {

    return (
      <div>
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} />
        <TodoForm addItem={this.addItem}/>
      </div>
    )
  }
}

export default TodoApp
