import React, { useState, useEffect } from "react";
import './App.css';
import { getAll, get, deleteById, post, put } from './memdb.js';


let isClicked = "Add";

function App() {
  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setSelectedRow(-1);
    isClicked = "Add";
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    const allCustomers = getAll();
    setCustomers(allCustomers);
  };

  const handleClick = (val) => {
    if (selectedRow === val.id) {
      handleClear();
    } else {
      setSelectedRow(val.id);
      setName(val.name);
      setEmail(val.email);
      setPassword(val.password);
      isClicked = "Update";
    }
  }

  const handleSubmit = (action) => {
    if (action === 'save') {
      if(isClicked === 'Add' && name && email && password ){
        let curIndex = customers.length
        post({curIndex, name, email, password})
        
        

      }else{  


        put(selectedRow,  { id: selectedRow, name, email, password }); 

      }

    } else if (action === 'Update') {
      console.log("Updating:", { name, email, password });
    } else if (action === 'delete') {
      deleteById(selectedRow);
    }
    getCustomers();
    handleClear();
  };

  return (
    <div className="App">
      <div className="card-container">
        <h2>Client List</h2>
        <table>
          <tbody>
            {customers.map((val) => (
              <tr key={val.id}
                className={selectedRow === val.id ? 'bold-row' : ''}
                onClick={() => handleClick(val)}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="form-container">
        <h2>{isClicked}</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(change) => setName(change.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(change) => setEmail(change.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(change) => setPassword(change.target.value)}
            className="input-field"
          />
          <div className="button-group">
          
            <button className="button-primary" onClick={() => handleSubmit('delete')}>Delete</button>
            <button className="button-primary" onClick={() => handleClear()}>Cancel</button>
            <button className="button-primary" onClick={() => handleSubmit('save')}>Save</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
