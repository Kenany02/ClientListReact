import React, { useState, useEffect } from "react";
import './App.css'


const data = [
  { id: 1, name: "Test1", email: "Test1@gmail.com", password: "Pass1" },
  { id: 2, name: "Test2", email: "Test2@gmail.com", password: "Pass2" },
  { id: 3, name: "Test3", email: "Test3@gmail.com", password: "Pass3" },
]

let id = -1;



function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRow, setSelectedRow] = useState("");

  const handleClick = (val) => {

    if (id == val.id) {
      console.log("Same item clicked")
      setName("");
      setEmail("");
      setPassword("");
      id = -1;
      setSelectedRow(-1);


    } else {
      setSelectedRow(val.id);


      console.log('List was clicked this is id: ' + val.id)
      setName(val.name)
      setEmail(val.email)
      setPassword(val.password)

      id = val.id;
    }




  }

  const handleSubmit = (action) => {
    if (action === 'add') {


      console.log("Adding:", { name, email, password });
    }
    else if (action === 'update') {
      console.log("Updating:", { name, email, password });
    } else if (action === 'delete') {
      console.log("Deleting:", { name, email, password });
    }
    setName("");
    setEmail("");
    setPassword("");
  };



  return (


    <div className="card-container">

      <h2> Client List</h2>

      <table>
      <tbody>
        {data.map((val, key) => (
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
          style={{ width: "calc(95% / 3)" }}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "calc(95% / 3)" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "calc(95% / 3)" }}
        />
        <div>
          <button className="button-primary" onClick={() => handleSubmit('add')}>Add</button>
          <button className="button-primary" onClick={() => handleSubmit('update')}>Update</button>
          <button className="button-primary" onClick={() => handleSubmit('delete')}>Delete</button>
        </div>
      </div>

    </div>

  );
}

export default App;