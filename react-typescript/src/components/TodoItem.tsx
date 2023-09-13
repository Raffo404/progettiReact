import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ textContent: string, onRemove: () => void}> = (props) => {
  return <li className={classes['todo-item']} onClick={props.onRemove}> {props.textContent} </li>
  
}

export default TodoItem