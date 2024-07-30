import React, { useState, useEffect } from "react";
import './App.css'


const data = [
    { name: "Test1", email: "Test1@gmail.com", password: "Pass1" },
    { name: "Test2", email: "Test2@gmail.com", password: "Pass2" },
    { name: "Test3", email: "Test3@gmail.com", password: "Pass3" },
]




function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (action) => {
      if (action === 'add') {
        
         
          console.log("Adding:", { name, email, password });
      } else if (action === 'update') {
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
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Pass</th>
              </tr>
              {data.map((val, key) => {
                 return (
                      <tr key={key}>
                          <td>{ val.name}</td>
                          <td>{val.email}</td>
                          <td>{val.password}</td>
                      </tr>
                  )
              })}
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