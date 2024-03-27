import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [intval, setIntval] = useState({
    username: "",
    useremail: "",
    userpass: "",
    userconpass: "",
  });

  const [data] = useState([]);
  const navigate = useNavigate();

  console.log(intval);
  // ============onchange event=============
  const getdata = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    console.log(value, name);

    setIntval(() => {
      return {
        // =============to update value ==========
        ...intval,
        [name]: value,
      };
    });
  };
  // ===========on click event===========
  const addData = (e) => {
    // ====to prevent default bahaviour=====
    e.preventDefault();

    const { username, useremail, userpass, userconpass } = intval;

    if (username === "") {
      alert("name field is required");
    } else if (useremail === "") {
      alert("email is required");
    } else if (!useremail.includes("@gmail.com")) {
      alert("please enter valid pattern");
    } else if (userpass === "") {
      alert("password is required");
    } else if (userconpass === "") {
      alert("confirm password is required");
    } else if (userpass !== userconpass) {
      alert("Both password field are not matched");
    } else if (userpass.length < 5) {
      alert("password should be greated than five");
    } else {
      console.log("data added successfully");
      localStorage.setItem("useryoutube", JSON.stringify([...data, intval]));
      navigate("/Login");
    }
    console.log(intval);
  };
  return (
    <div className="bg-dark bg-gradient">
      <div className="container p-5 " style={{ height: "650px"}}>
        <div
          className="text-dark bg-light bg-gradient align-middle g-col-4 p-3 align-center shadow rounded-4 "
          style={{ width: "50%", margin: "auto" , marginTop:"50px" }}
        >
          <form>
            <h5
              className="p-2"
              style={{
                color: "#ffc800",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              Signup Form
              <Link to={"/"}>
              <button
                style={{ float: "right" }}
                type="button"
                className="btn-close "
                aria-label="Close"
              ></button></Link>
            </h5>
            <div className="ui divider ">
              <div className="ui form ">
                <div className="field form-floating mb-3">
                  <input
                    style={{ height: "10px" }}
                    id="floatinginput"
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Username"
                    // value={FormValues.uname}
                    onChange={getdata}
                  />
                  <label htmlFor="floatinginput">Username</label>
                </div>
                {/* {FormErrors.uname && (
                <p style={{ color: "red" }}>{FormErrors.uname}</p>
              )} */}
                <div className="field form-floating mb-3">
                  <input
                    id="iemail"
                    className="form-control"
                    type="text"
                    name="useremail"
                    placeholder="Email"
                    // value={FormValues.uemail}
                    onChange={getdata}
                  />
                  <label htmlFor="iemail">Email</label>
                </div>
                {/* {FormErrors.uemail && (
                <p style={{ color: "red" }}>{FormErrors.uemail}</p>
              )} */}
                {/* <div className="field form-floating mb-3">
                <input
                id="icontact"
                  className="form-control"
                  type="number"
                  name="ucontact"
                  placeholder="Contact"
                  value={FormValues.ucontact}
                  // onChange={handleChange}
                />                <label htmlFor="icontact">Contact</label>

              </div> */}
                {/* {FormErrors.ucontact && (
                <p style={{ color: "red" }}>{FormErrors.ucontact}</p>
              )} */}
                <div className="field form-floating mb-3">
                  <input
                    id="ipass"
                    className="form-control"
                    type="password"
                    name="userpass"
                    placeholder="Password"
                    // value={FormValues.upass}
                    onChange={getdata}
                  />
                  <label htmlFor="ipass">Password</label>
                </div>
                {/* {FormErrors.upass && (
                <p style={{ color: "red" }}>{FormErrors.upass}</p>
              )} */}
                {/* <div className="field form-floating mb-3">
                <input
                id="iRpass"
                  className="form-control"
                  type="password"
                  name="retypepassword"
                  placeholder="Re-type Password"
                  // value={FormValues.retypepassword}
                  // onChange={getdata}
                />                <label htmlFor="iRpass">Retype Password</label>

              </div> */}
                {/* {FormErrors.retypepassword && (
                <p style={{ color: "red" }}>{FormErrors.retypepassword}</p>
              )} */}
                <div className="field form-floating mb-3">
                  <input
                    id="iCpass"
                    className="form-control"
                    type="password"
                    name="userconpass"
                    placeholder="Confirm Password"
                    // value={FormValues.confirmpassword}
                    onChange={getdata}
                  />
                  <label htmlFor="iCpass">Confirm Password</label>
                </div>
                {/* {FormErrors.confirmpassword && (
                <p style={{ color: "red" }}>{FormErrors.confirmpassword}</p>
              )} */}
                <div className="p-2 bd-highlight">
                  <button
                    type="submit"
                    onClick={addData}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <p>
              already have Account ?
              <Link to="/Login">
                <span>Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
