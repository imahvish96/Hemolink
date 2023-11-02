import React from "react";

function BloodStock({stock}) {

  return (
    <div className="container mt-4 mb-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Blood Bank</th>
            <th>Category</th>
            <th>Availability</th>
            <th>Last Update</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {stock && stock.bloodStock.data.map((row, i) => (
            <tr key={i}>
              {row.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BloodStock;
