import React, { useRef, useContext } from 'react'
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);    //inizialmente non abbiamo il collegamento e settiamo a null il valroe iniziale

    const todosCtx = useContext(TodosContext);
    const submitHandler = (event: React.FormEvent ) : void => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        //abbiamo il ? perchè il ref potrebbe non essere connesso a niente inizialmente, quindi current. 
        //utilizziamo ! se siamo sicuri al 100% che il value non sarà mai null e voglio assegnare a enteredText solo un eventuale valore non nullo.
        if (enteredText.trim().length === 0) {
            return;
        }

        //chiamo una funzione che mi aggiunge il testo alla lista di todo, definita in App
        todosCtx.addTodo(enteredText);

        
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
          <label htmlFor='text'>Todo text</label>
          <input type='text' id='text' ref={todoTextInputRef} />
          <button>Add Todo</button>
        </form>
      );
}

export default NewTodo;