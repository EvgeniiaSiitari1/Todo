import React, { useState } from 'react';

    const Todolist = () => {
const[todo, setTodo] = useState({description:'', date:''});
const[todos, setTodos] = useState([]);

const addTodo= () => {
    setTodos([{description: todo.description, date: todo.date}, ... todos]);
setTodo({description: '', date: ''});
}
const inputChanged= (event) => {
    event.preventDefault(); 
    setTodo({...todo,[event.target.name]: event.target.value});
}

const deletetodo = (row) =>{
    setTodos(todos.filter((_,index) => row !== index))
}

return (
    <div>
        <h1>Todo List</h1>
   
        <input type="text" name='description' value={todo.description} onChange={inputChanged} />
        <input type="date" name='date' value={todo.date} onChange={inputChanged}/>
    <button onClick ={addTodo}>Add</button>
      <table><tbody>
      <td><p><strong>Date</strong></p></td>
      <td><p><strong>Description</strong></p></td>
          {
          todos.map((todo,index) => 
          <tr key={index}>
               <td>{todo.date}</td>
               <td>
                {todo.description}
                <button onClick ={() => deletetodo(index)}>Delete</button></td>
              </tr>
              )
              }
          </tbody></table>   
    </div>
)
};

export default Todolist;