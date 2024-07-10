import { CButton, CCard, CCardBody, CCardHeader, CCol, CInput, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";

const LoginReact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
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
                      <CCol lg="3">
                        <h5 className="mt-2">Username</h5>
                      </CCol>
                      <CCol lg="9">
                        <CInput type="text" placeholder="eg. Zoro" />
                      </CCol>
                    </CRow>
                    <CRow className="mt-2">
                      <CCol lg="3">
                        <h5 className="mt-2">Password</h5>
                      </CCol>
                      <CCol lg="9">
                        <CInput type="password" placeholder="enter your password..." />
                      </CCol>
                    </CRow>
                    <br /><br />
                    <CRow style={{ float: "right" }}>
                      <CButton className="btn btn-success">
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
    </>
  );
};

export default LoginReact;
