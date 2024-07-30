import React, { useState, useEffect } from "react";
import './App.css';
import { getAll, get, deleteById, post, put } from './memdb.js';

let id = -1;
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
    if (id === val.id) {
      id = -1;
      handleClear();
    } else {
      setSelectedRow(val.id);
      setName(val.name);
      setEmail(val.email);
      setPassword(val.password);
      id = val.id;
      isClicked = "Update";
    }
  }

  const handleSubmit = (action) => {
    if (action === 'Add') {
      console.log("Adding:", { name, email, password });
    } else if (action === 'Update') {
      console.log("Updating:", { name, email, password });
    } else if (action === 'delete') {
      deleteById(selectedRow);
      console.log("Deleting:", { name, email, password });
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
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <div className="button-group">
            <button className="button-primary" onClick={() => handleSubmit(isClicked)}>{isClicked}</button>
            <button className="button-primary" onClick={() => handleSubmit('delete')}>Delete</button>
            <button className="button-primary" onClick={() => handleClear()}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
