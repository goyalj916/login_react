import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const history = useNavigate();

  const [intval, setIntval] = useState({
    useremail: "",
    userpass: "",
  });

  //  console.log(intval);

  const getData = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value,name);

    setIntval(() => {
      return {
        // =============to update value ==========
        ...intval,
        [name]: value,
      };
    });
  };
  // ===========on click event===========
  const checkData = (e) => {
    // ====to prevent default bahaviour=====
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    // console.log(getuserArr);
    const { useremail, userpass } = intval;

    if (useremail === "") {
      alert("email is required");
    } else if (!useremail.includes("@gmail.com")) {
      alert("please enter valid pattern");
    } else if (userpass === "") {
      alert("password is required");
    } else if (userpass.length < 5) {
      alert("password should be greated than five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.useremail === useremail && el.userpass === userpass;
        });
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("logged in....");
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/Details");
        }
      }
    }
    // console.log(intval);
  };

  return (
    <div className="bg-dark bg-gradient ">
      <div className="container p-5 top-0 end-0" style={{ height: "700px" }}>
        <div
          className="text-dark bg-light bg-gradient align-middle g-col-4 p-3 shadow rounded-4"
          style={{ width: "50%", margin: "auto",marginTop:"70px" }}
        >
          <form>
            <h5 className="p-2"
              style={{
                color: "#ffc800",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              Login Form
              <Link to={"/"}>
              <button
                style={{ float: "right" }}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button></Link>
            </h5>

            <div className="ui form">
              <div className="field form-floating mb-3">
                <input
                  id="Iemail"
                  className="form-control"
                  type="text"
                  name="useremail"
                  placeholder="Email"
                  // value={FormValues.uemail}
                  onChange={getData}
                  required
                />
                <label htmlFor="Iemail">Email</label>
              </div>
              {/* {FormErrors.uemail && (
              <p style={{ color: "red" }}>{FormErrors.uemail}</p>
            )} */}
              <div className="field form-floating mb-3">
                <input
                  id="Iupass"
                  className="form-control"
                  type="password"
                  name="userpass"
                  placeholder="Password"
                  // value={FormValues.upass}
                  onChange={getData}
                  required
                />
                <label htmlFor="Iupass">Password</label>
              </div>
              {/* {FormErrors.upass && (
              <p style={{ color: "red" }}>{FormErrors.upass}</p>
            )} */}
              <div className="p-2 bd-highlight">
                <button className="btn btn-primary" onClick={checkData}>
                  Submit
                </button>
              </div>
            </div>
            <p>
              Create account!
              <Link to="/Signup">
                <span>Signup</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
