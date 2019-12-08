import React, { Component } from 'react'
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../../components/TodoForm/TodoForm'
import ModalDelete from '../../components/ModalDelete/ModalDelete'

class TodoApp extends Component {

  state = {
    modalStatus: false,
    todoToBeDeleted: '',
    todoItems: [
      {index: 1, value: "Learn React"},
      {index: 2, value: "Learn CSS"}
    ]
  }
  showModalHandler = (index) => {
    this.setState({modalStatus: true, todoToBeDeleted: index})
  }
  hideModalHandler = () => {
    this.setState({modalStatus: false, todoToBeDeleted: ''})
  }
  addItem = (todoItem) => {
    let todoItems = [...this.state.todoItems];
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
    });
    this.setState({todoItems: todoItems});
  }
  removeItem = () => {
      let todoItems = [...this.state.todoItems];
      todoItems.splice(this.state.todoToBeDeleted, 1);
      this.setState({todoItems: todoItems}, () => {
        this.hideModalHandler()
      });
    return true;
  }
  render() {

    return (
      <div>
        <TodoList items={this.state.todoItems} handleShowModal={this.showModalHandler} />
        <TodoForm addItem={this.addItem}/>
        <ModalDelete 
          removeItem={this.removeItem}
          modalStatus={this.state.modalStatus} 
          handleHideModal={this.hideModalHandler}/>
      </div>
    )
  }
}

export default TodoApp;
