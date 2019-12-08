import React, { useEffect,useRef} from 'react';
import classes from './TodoForm.module.css'

const TodoForm = props => {
  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    var newItemValue = inputRef.current.value;

    if (newItemValue) {
     props.addItem({ newItemValue });
     formRef.current.reset();
    }
  }
  return (
    <form ref={formRef} onSubmit={onSubmit} className={classes.TodoForm}>
      <input ref={inputRef} className={classes.TodoFormInput} placeholder="Enter Task"></input>
      <button type="submit" className={classes.TodoFormButton}>Add</button>
    </form>
  );
}

export default TodoForm;
