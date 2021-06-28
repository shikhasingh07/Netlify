import React, { useState } from "react";
import Card from "../Assets/Card.png";
import Logo from "../Assets/Logo.png";
import { useHistory } from "react-router-dom";

const Login = () => {
  const value = {
    nameF: "",
    email: "",
  };
  const pincode = {
    pincode: "",
  };
  const [inputData, setInputData] = useState(value);
  const [inputpincode, setPincode] = useState(pincode);
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const handlePincode = (e) => {
    const { name, value } = e.target;
    setPincode({
      ...inputpincode,
      [name]: value,
    });
  };
  const handleFormData = (event) => {
    event.preventDefault();
    if (
      inputData.nameF === "" ||
      inputData.email === "" ||
      inputpincode.pincode === ""
    ) {
      alert("Please Fill value");
      return;
    }
    localStorage.setItem("nameF", JSON.stringify(inputData.nameF));
    localStorage.setItem("email", JSON.stringify(inputData.email));
    localStorage.setItem("pincode", JSON.stringify(inputpincode.pincode));
    history.push({
      pathname: "/home",
      state: {
        Name: inputData.nameF,
        email: inputData.email,
        pincode: inputpincode.pincode,
      },
    });
  };
  const cleanForm = () => {
    setInputData(value);
    setPincode(pincode);
    localStorage.removeItem("nameF");
    localStorage.removeItem("email");
    localStorage.removeItem("pincode");
  };
  return (
    <>
      <div>
        <div className="container-fluid m-0 p-0">
          <div className="card ">
            <div className="row m-0 p-0">
              <div
                className="col-md-6 p-0 "
                style={{ height: 663, width: 720 }}
              >
                <img
                  src={Card}
                  className="img-fluid rounded-start"
                  alt="covid"
                />
                <div className="card-img-overlay img-over">
                  <h5 className="card-title headp mb-0">Vaccine Tracker</h5>
                  <p className="card-text ptext mb-1 ">
                    Find all the important information and{" "}
                  </p>
                  <p className="card-text ptext mb-1">
                    all the things related to Covid Virus and Vaccine Here
                  </p>
                  <p className="card-text ptext ">and Vaccine Here</p>
                </div>
              </div>
              {/* ----------------------input form ----------------- */}
              <div className="col-md-6">
                <div className="card-body col">
                  <div
                    class="d-flex justify-content-end ml-auto img-main
                  "
                  >
                    <img src={Logo} alt="Logo" />
                  </div>
                  <form onSubmit={submit} className="ml-4">
                    <label className="form-check-label label mb-2 ">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="col form-control text-muted"
                      value={inputData.nameF}
                      name="nameF"
                      onChange={handleInputChange}
                    />
                    <label
                      className="form-check-label label
                    Login-label mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="col form-control text-muted"
                      value={inputData.email}
                      name="email"
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label label Login-label mb-2">
                      Pincode
                    </label>
                    <input
                      type="number"
                      placeholder="Pincode"
                      required
                      className="col form-control text-muted"
                      value={inputpincode.pincode}
                      name="pincode"
                      onChange={handlePincode}
                    />

                    <button
                      type="submit"
                      className="col btn login-statc "
                      onClick={handleFormData}
                    >
                      Show Statstics
                    </button>

                    <button
                      type="submit"
                      className="col btn login-clean"
                      onClick={cleanForm}
                    >
                      Reset Form
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
