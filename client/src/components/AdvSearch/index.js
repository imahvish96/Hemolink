import React from 'react';
import axios from 'axios';
import { State, bloogGroup } from '../../constant'
import 'bootstrap/dist/css/bootstrap.min.css';
import BloodStock from '../Stock';
import StockReponsive from '../StockReponsive'

const BloodBankSearch = () => {
    const [district, setDistrict] = React.useState([]);
    const [formValue, setFormValue] = React.useState();
    const [bloodStocks, setBloodStocks] = React.useState()
    const handleChange = (e) => {
        const { value, name } = e.target;
        const district = State.find((item) => {
            return value === item.value;
        })

        // const formVal = {[name]: value};
        // formVal[name] = value;
        if(name === 'state') setDistrict(district);
        setFormValue((prev) => {
            console.log(formValue)
            return {
                ...prev,
                [name]: value
            }
        })

        console.log('Value',formValue)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await axios
        .get(
          `http://localhost:5000/stock?stateCode=${formValue.state}&districtCode=${formValue.district}&bloodGroup=${formValue.bloodgrp}`
        )
        .then((res) => {
            console.log("999Res", res);
            return res.data
        })
        .catch((error) => console.log(error));
      console.log("BB99", result);
      setBloodStocks(result);
    };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Search Nearest Blood Bank</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <select className="form-control" placeholder="Select State" onChange={(e) => handleChange(e)} name="state">
                <option>Select State</option>
                {State.map((item, i) => (
                    <option value={item.value}>{item.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <select className="form-control" placeholder="Select District" onChange={(e) => handleChange(e)} name="district">
                <option>Select District</option>
                {district?.records?.map((item, i) => (
                    <option value={item.value}>{item.id}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <select className="form-control" placeholder="Select Blood Group" onChange={(e) => handleChange(e)} name="bloodgrp">
                <option>Select District</option>
                {bloogGroup?.map((blood, i) => (
                    <option value={blood.value}>{blood.type}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-danger btn-block">
              Search
            </button>
          </div>
        </div>
      </form>
      <div style={{maxHeight: "400px", overflowY:'scroll'}}>
      <StockReponsive stock={bloodStocks}/>

      </div>
    </div>
  );
};

export default BloodBankSearch;
