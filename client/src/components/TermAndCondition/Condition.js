import React from 'react';
import './Condition.css';

const Condition = () => {
  return (
    <div className="d-flex bg-bright">
      <div className="container mt-5 mb-5">
        <div className="row conditions">
          <div className="col-12">
            <h3 className='mb-3'>TYPES OF DONATION</h3>
            <p>The average human body contains about five liters of blood, which is made of several cellular and non-cellular components such as Red blood cell, Platelet, and Plasma.</p>
            <p>Each type of component has its unique properties and can be used for different indications. The donated blood is separated into these components by the blood centre and one donated unit can save upto four lives depending on the number of components separated from your blood.</p>
            <h3 className='mb-3'>Who can donate?</h3>
            <p>You need to be 18-65 years old, weight 45kg or more and be fit and healthy.</p>
            <h3 className='mb-3'>How often can I donate?</h3>
            <p>Male donors can donate again after 90 days and female donors can donate again after 120 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condition;
