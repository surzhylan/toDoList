import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import ToDoList from './components/todo/ToDoList';
import AddToDo from './components/addTodo/AddToDo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [todo, setToDo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: false
    }
  ])
  
  console.log(todo)
  return (
    <div className="container">
      <Navbar />
      <AddToDo todo={todo} setToDo={setToDo} />
      <ToDoList todo={todo} setToDo={setToDo} />
    </div>
  );
}

export default App;
