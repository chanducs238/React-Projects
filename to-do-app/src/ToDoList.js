import React from 'react';
// import ToDo from './ToDo';

const ToDoList = ({item, toggle}) => {

    const handleOnClick = (event) => {
        toggle(event.target.id)
    }

    return(
       <ul>
           <li onClick={handleOnClick} className={item.complete ? 'is-done' : ''}>{item.taskName}</li>
       </ul>
    )

};

export default ToDoList;

