import { CButton, CCard, CCardBody, CCardHeader, CCol, CImg, CInput, CRow, CLabel } from "@coreui/react";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import SuccessError from "./common/SuccessError";

const LoginReact = () => {
  const [zoomSize, setZoomSize] = useState(Math.round(window.devicePixelRatio *100));
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    $(window).resize(function () {
      setZoomSize(Math.round(window.devicePixelRatio * 100));
    });
  }, []);

  const userNameChange = (e) =>{
    setUserName (e.target.value);
  }
  const passwordChange = (e) =>{
    setPassword (e.target.value);
  }

  const loginClick = () =>{

  }

  return (
    <>
      {zoomSize <= 150 && (
        <div className="login-bg min-vh-100">
          <CRow>
            <CCol lg="4"></CCol>

            <CCol lg="4">
              <CRow>
                <CCol lg="12">
                  <CCard style={{ marginTop: "200px" }}>
                    <CCardHeader>
                      <h3 style={{ marginTop: "15px" }}>Login Form</h3>
                    </CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol lg="4">
                          <h5 className="mt-2">Username</h5>
                        </CCol>
                        <CCol lg="8">
                          <CInput type="text" placeholder="eg. FirstName LastName"
                          value={userName} onChange={userNameChange}/>
                        </CCol>
                      </CRow>
                      <CRow className="mt-2">
                        <CCol lg="4">
                          <h5 className="mt-2">Password</h5>
                        </CCol>
                        <CCol lg="8">
                          <CInput type="password" placeholder="enter your password..." 
                          value={password} onChange={passwordChange} />
                        </CCol>
                      </CRow>
                      <br /><br />
                      <CRow style={{ float: "right" }}>
                        <CButton className="btn btn-success"
                        onClick={loginClick} >
                          Login
                        </CButton> &emsp;
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCol>

            <CCol lg="4"></CCol>
          </CRow>
        </div>

      )}

      {zoomSize > 149 && (
        <div className="login-bg-mobile min-vh-100">
          <br /><br /><br /><br /><br /><br />
          <h2
          style={{ textAlign:"center", fontWeight:"bold", color:"white" }}>
            Login Form
          </h2>
          <CRow style={{justifyContent:"center"}}>
            <CCol lg="12">
              <center>
                <CImg src={"image/logo.png"} width={200} />
              </center>
            </CCol>
          </CRow>
          <CRow style={{ paddingRight:"100px", paddingLeft:"100px"}}>
            <CCol lg="3"></CCol>
            <CCol lg="6">
              <center>
                <CLabel style={{ fontWeight:"bold", color:"" }}>Username</CLabel><br /><br />
                <CInput type="text" /><br /><br />
                <CLabel style={{ fontWeight:"bold", color:"" }}>Password</CLabel><br /><br />
                <CInput type="password" /><br /><br />
                <CButton className="btn btn-success" >Login</CButton>
              </center>
            </CCol>
            <CCol lg="3"></CCol>

          </CRow>

        </div>
      )}

    </>
  );
};

export default LoginReact;
