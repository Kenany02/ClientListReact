import React from "react";

function CustomerAddUpdateForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  isClicked,
  handleSubmit,
  handleClear,
}) {
  return (
  
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
  );
}

export default CustomerAddUpdateForm;
