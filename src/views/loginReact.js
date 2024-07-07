import { CButton, CCard, CCardBody, CCardHeader, CCol, CInput, CRow } from "@coreui/react";
import React, { useEffect } from "react";

const LoginReact = () => {

  useEffect( () => {

    setLoading(true);
    setTimeout( () => {
        setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className="login-bg min-vh-100">
        <CRow>
          <CCol lg="6">
            <img src="" alt="" />
          </CCol>
          <CCol lg="6">
            <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="8">
                <CCard style={{ marginTop:"200px" }}>
                  <CCardHeader>
                    <h3 style={{ marginTop:"15px" }}>Login Form</h3>
                  </CCardHeader>
                  <CCardBody>
                    <CRow>
                      <CCol lg="4">
                        <h5 className="mt-2">Username</h5>
                      </CCol>
                      <CCol lg="8">
                        <CInput type="text" />
                      </CCol>
                    </CRow>
                    <CRow className="mt-2">
                      <CCol lg="4">
                        <h5 className="mt-2">Password</h5>
                      </CCol>
                      <CCol lg="8">
                        <CInput type="password" />
                      </CCol>
                    </CRow>
                    <br /><br />
                    <CRow style={{ float:"right" }}>
                      <CButton className="btn btn-success">
                        Login
                      </CButton> &emsp;
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol lg="2"></CCol>
            </CRow>
          </CCol>
        </CRow>
      </div>

    </>

  )
}

export default LoginReact;
