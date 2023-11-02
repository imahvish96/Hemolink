import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Head from "./Common/Header";
import Foot from "./Common/Footer";
import List from "../pages/List";
import EnrollUser from "./Register/Register";
import SignIn from './SignIn';
import SignUp from "./SignUp";

function App() {
  let [users, setUsers] = useState("");
  let [request, setRequest] = useState("");
  let [donor, setDonor] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((res) => {
        let list = res.data.Users;
        setUsers((users) => list);
        return list;
      })
      .then((users) => {
        let filterRequest = [];
        let filterDonor = [];
        for (let filterUser of users) {
          if (filterUser?.usertype?.toLowerCase().includes("request")) {
            filterRequest.push(filterUser);
            setRequest((request) => filterRequest);
          } else if (filterUser.usertype.toLowerCase().includes("donate")) {
            filterDonor.push(filterUser);
            setDonor((donor) => filterDonor);
          }
        }
      });
  }, []);

  return (
    <>
      <div className="bg-body">
        <BrowserRouter>
          <Head />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/list/:rquesttype"
              render={() => (
                <List
                  userData={users}
                  requestData={request}
                  donorData={donor}
                />
              )}
            />
            <Route exact path="/register" component={EnrollUser} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
          <Foot />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
