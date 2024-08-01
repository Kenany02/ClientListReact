import React, { useState, useEffect } from "react";
import './App.css';
import { getAll, get, deleteById, post, put } from './memdb.js';
import CustomerList from "./CustomerList.jsx";
import CustomerAddUpdateForm from "./CustomerAddUpdateForm.jsx";


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
      if(name && email && password){
        if(isClicked === 'Add' && name && email && password ){
          let curIndex = customers.length
          post({id: curIndex, name, email, password})
        
        }else{
          put(selectedRow,  { id: selectedRow, name, email, password }); 
        }
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

      <CustomerList
          customers={customers}
          selectedRow={selectedRow}
          handleClick={handleClick}
        />
      
        <CustomerAddUpdateForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isClicked={isClicked}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
        />
      </div>
    </div>
  );
}

export default App;
