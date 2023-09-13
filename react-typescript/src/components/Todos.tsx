import React, {useContext} from 'react'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'
import { TodosContext } from '../store/todos-context'

//React.FC generico functional component
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map ( element => <TodoItem key={element.id} onRemove={todosCtx.removeTodo.bind(null, element.id)} textContent={element.text} /> ) }
        </ul>
    )
}

export default Todos