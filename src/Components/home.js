import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
import "../index.css";
import Logo from "../Assets/Logo.png";

const Home = (props) => {
  const Name = JSON.parse(localStorage.getItem("nameF"));
  const email = JSON.parse(localStorage.getItem("email"));
  const pincode = JSON.parse(localStorage.getItem("pincode"));
  const [indata, setData] = useState([]);

  var today = new Date();
  const handleData = async () => {
    await axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today.getDate()}`
      )
      .then((res) => {
        const persons = res.data.sessions;
        setData(persons);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  function FirstName(str) {
    return str[0].toUpperCase();
  }
  const ansWer = Name.split(" ");

  const FullName = capitalizeFirstLetter(ansWer[1]);
  const FiNa = FirstName(Name);

  return (
    <>
      <div className="main-container">
        <div className="d-flex mb-2">
          <div className="container main-head m-0 p-0">
            <span className="d-flex align-items-end">
              <div className="d-flex heading first-le mb-2 m-0">{FiNa}</div>
              <div className="mid">{ansWer[0].slice(1)}&nbsp;</div>
              <div className=" d-flex heading m-0">{FullName},</div>
              <div className="font-weight-bold mb-0 pincode">
                &nbsp;{pincode}
              </div>
            </span>
            <div className="font-weight-bold email">{email}</div>
          </div>
          <div
            className="d-flex justify-content-end ml-auto img-main
                  "
          >
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <table className="table table-striped mb-0 ">
          <thead className="table-head">
            <tr>
              <th scope="col">Pincode</th>
              <th scope="col">District Name</th>
              <th scope="col">Name</th>
              <th scope="col">Fee Type</th>
              <th scope="col">State Name</th>
              <th scope="col">Vaccine</th>
              <th scope="col">Age Limit</th>
              <th scope="col">Slots</th>
            </tr>
          </thead>
        </table>
        {indata.length > 0 ? (
          indata.map((data, index) => (
            <Table
              key={index}
              name={data.name}
              pincode={data.pincode}
              district={data.district_name}
              fee={data.fee_type}
              statename={data.state_name}
              Vaccine={data.vaccine}
              Age={data.min_age_limit}
              Slots={data.slots.length}
            />
          ))
        ) : (
          <table className="table table-striped table-bordered  table-hover ">
            <tbody>
              <tr>
                <td className="w-10">If Data is not here</td>
                <td className="w-10">Please Check Your Pincode</td>
                <td className="w-10">Please Enter Valid Pincode</td>
                <td className="w-10">Try Again</td>
              </tr>
            </tbody>
          </table>
        )}

        <div className="container-fluid p-0 d-flex justify-content-center">
          <Link className="col btn go-back " to="/">
            Go Back
          </Link>

          <button
            type="submit"
            className="col btn update-data "
            onClick={handleData}
          >
            Update Data
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
// avi@theHOBNOB.in
