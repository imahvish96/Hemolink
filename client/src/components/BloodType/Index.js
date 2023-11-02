import React from "react";
import './styles.css'

function BloodTable() {
  // Sample data for the table
  const bloodData = [
    { bloodType: "A+", donateTo: "A+, AB+", receiveFrom: "A+, A-, O+, O-" },
    { bloodType: "B-", donateTo: "B-, AB-", receiveFrom: "B-, B+" },
    { bloodType: "O+", donateTo: "O+, A+, B+, AB+", receiveFrom: "O+, O-" },
    { bloodType: "AB+", donateTo: "AB+", receiveFrom: "Everyone" },
    { bloodType: "A-", donateTo: "A+, A-, AB+, AB-", receiveFrom: "A-, O-" },
    { bloodType: "O-", donateTo: "Everyone", receiveFrom: "O-" },
    { bloodType: "B-", donateTo: "B+, B-, AB+, AB-", receiveFrom: "B-, O-" },
    { bloodType: "AB-", donateTo: "AB+, AB-", receiveFrom: "AB-, A-, B-, O-" },
    // Add more data as needed
  ];

  return (
    <div className="container mt-4">
        <div style={{textAlign:'center', marginBottom:'20px'}}>
            <h3>Compatible Blood Type Donors</h3>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th>Blood Type</th>
            <th>Donate Blood To</th>
            <th>Receive Blood From</th>
          </tr>
        </thead>
        <tbody>
          {bloodData.map((data, index) => (
            <tr key={index}>
              <td>{data.bloodType}</td>
              <td>{data.donateTo}</td>
              <td>{data.receiveFrom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BloodTable;
