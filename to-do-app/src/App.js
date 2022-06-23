import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList'

function App() {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);
  const [taskComplete, setTaskComplete] = useState(false);

const handleOnChange = (event) => {
  setUserInput(event.target.value);
}


const handleOnClick = () => {
  if(userInput === ''){
  alert('Please enter the value');
  } else {
  setList((prevState) => {
    return [...prevState, {id:list.length+1, taskName: userInput, isComplete: taskComplete}];
  })
  setUserInput('');
}
}


const handleToggle = (id) => {
  let toggleOutput = list.map((item) => {
    return item.id === id ? { ...item, isComplete: !item.isComplete}: {...item}
  })
  setList(toggleOutput);
}
  return (
    <div className="App">
      <h1>To-Do app</h1>
      <input type='text'
       value={userInput}
       onChange={handleOnChange}
       />
       <button onClick={handleOnClick} style={{ margin: '15px'}}>Add</button>
       {
          list.map((item) => {
          return <ToDoList item={item} toogle={handleToggle}></ToDoList>
         })
       
       }
      
    </div>
  );
}

export default App;
