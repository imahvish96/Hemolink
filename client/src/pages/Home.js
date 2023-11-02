import React from "react";
import Banner from "../components/Banner/Banner";
import Bgroup from "../components/BloodGroup/Bloodgroup.js";
import Recentrequestlist from "../components/RecentRequest/Recentrequest.js";
import Donorslist from "../components/RecentDonors/Recentdonors.js";
import Condition from "../components/TermAndCondition/Condition.js";
import BloodTable from "../components/BloodType/Index";
import BloodBankSearch from "../components/AdvSearch";
import SignUpSignIn from '../components/SignIn/index';


const Home = () => {
  return (
    <>
      <Banner />
      {/* <SignUpSignIn/> */}
      <BloodBankSearch/>
      <BloodTable/>
      <Condition />
    </>
  );
};

export default Home;
