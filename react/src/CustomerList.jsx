import React from "react";

function CustomerList({ customers, selectedRow, handleClick }) {
  return (
    <div>
    <h2>Kenan's Client List</h2>
    <div className="table-container">
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
    </div>
    </div>
  );
}

export default CustomerList;
