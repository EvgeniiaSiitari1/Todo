import React, {useState} from 'react';
import './App.css';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { MuiPickersUtilsProvider,  KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

function App() {
  const currentDate = new Date();
  const[desc, setDesc] = useState({description: '', date: currentDate});
  const[todos, setTodos] = useState([]);

  const inputChanged =(event) => {
    setDesc({...desc,[event.target.name]: event.target.value});
  }

  const handleDateChange = date => {
    setDesc({...desc, date: date});
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([{description: desc.description, date: desc.date.toLocaleDateString()}, ...todos]); 
     setDesc({description: '', date: currentDate})
  }

  const deleteTodo = (row) =>{
    console.log(row);
    setTodos(todos.filter((_,index) => row !== index))
    
}

const columns = [ 
  {Header: 'Description',
  accessor: 'description'},

{
  Header: 'Date',
  accessor: 'date'
},

{
  Cell: row => <Button variant="contained"
color="secondary" size="small" startIcon={<DeleteIcon />}  onClick={() => deleteTodo(row.index)}> Delete</Button>
}
]
  return (
  <div className="App">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
   <h1 className="App-header"><strong>TO-DO LIST</strong></h1> 
 <TextField name="description" label="Description" name="description" value={desc.description} onChange={inputChanged}/>
  <KeyboardDatePicker
          id="date-picker-dialog"
          label="Choose a date"
          format="dd/MM/yyyy"
          value={desc.date}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <Button size="big" variant="contained" color="primary" onClick={addTodo} >Add</Button>
  <ReactTable data={todos} columns={columns} defaultPageSize={20} filterable={true}/> 
    </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
