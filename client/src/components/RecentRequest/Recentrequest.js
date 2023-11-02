import React from 'react';
import { Table } from 'react-bootstrap';

const Recentrequestlist = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row justify-content-center mt-3 mb-3">
          {/* <div className="col-lg-8 mt-4 mb-4">
            <h2 className="text-center title">Recent Request For Blood</h2>
          </div> */}
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-lg-12">
            <Table responsive>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Distance</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>A+</th>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recentrequestlist;
