import React from 'react';
import './Banner.css';
import Searchbar from '../Search/Searchbar';
import { description } from '../../constant';

const Banner = () => {
  return (
    <section>
      <div className="container ">
        <div className="row mt-4 mb-4">
          <div className="col-md-6 ">
            <div className="">
              <h1 className="text-uppercase f-color text-left">
                <span style={{ fontSize: '0.9em', fontWeight: '800', letterSpacing: '6px' }}>Donate Blood </span> <br />
                <span style={{ fontSize: '0.8em', fontWeight: '700', letterSpacing: '15px', color: '#ff5363' }}>To Save Life</span>
              </h1>
              <p style={{ fontSize: '1.1em', textAlign: 'left', fontWeight: '600', textTransform: 'capitalize' }}>{description}</p>
            </div>
            <ul className="row status">
              <li className="col-sm-4 text-center">
                <h6>PLASMA DONATION</h6>
                <span>4546</span>
              </li>
              <li className="col-sm-4 text-center">
                <h6>PLASMA REQUEST</h6>
                <span>4546</span>
              </li>
              <li className="col-sm-4 text-center">
                <h6>TOTAL QUERY</h6>
                <span>4546</span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + '/images/donating-blood.webp'} alt="" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
