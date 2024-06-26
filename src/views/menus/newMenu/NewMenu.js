import { CButton, CCol, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";

const NewMenu=()=>{

  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ birthday, setBirthday ] = useState("");
  const [ selectedJskill, setSelectedJskill ] = useState("");
  const [ selectedEskill, setSelectedEskill ] = useState("");


  const [ japaneseSkill, setJapaneseSkill ] = useState([
    { id : "1", level : "N1"},
    { id : "2", level : "N2"},
    { id : "3", level : "N3"},
    { id : "4", level : "N4"},
    { id : "5", level : "N5"},
   ]);
  const [ englishSkill, setEnglishSkill ] = useState([
    { id : "1", level : "Beginer"},
    { id : "2", level : "intermediate"},
    { id : "3", level : "Advance"},
   ]);

  const nameChange = (e) => {
    setName (e.target.value);
  }
  const phoneChange = (e) =>{
    setPhone(e.target.value);
  }
  const emailChange = (e) =>{
    setEmail(e.target.value);
  }
  const birthdayChange = (e) =>{
    setBirthday(e.target.value);
  }
  const japanChange = (e) =>{
    setSelectedJskill(e.target.value);
  }
  const engChange = (e) =>{
    setSelectedEskill(e.target.value);
  }

  const resetClick = () => {
    setName ('');
    setPhone ('');
    setEmail ('');
    setBirthday ('');
    setSelectedJskill (' -- Select -- ');
    setSelectedEskill (' -- Select -- ');
  }

  const sendClick= () => {
    localStorage.setItem("NAME", name);
    localStorage.setItem("PHONE", phone);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("BIRTHDAY", birthday);
    localStorage.setItem("JSKILL", selectedJskill);
    localStorage.setItem("ESKILL", selectedEskill);

  }


    return(
      <>
        <h1 className="mt-3" align="center">Register Form</h1>
        <br /><br />

        <CRow>

          <CCol lg="6">
            <CRow>
              <CCol lg="1"></CCol>
              <CCol lg="3"><CLabel className="mt-1"> Name </CLabel></CCol>
              <CCol lg="7"> <CInput type="text" value={ name } onChange={ nameChange } /> </CCol>
              <CCol lg="1"></CCol>
            </CRow>
            <br /><br />
            <CRow>
              <CCol lg="1"></CCol>
              <CCol lg="3"><CLabel className="mt-1"> Phone </CLabel></CCol>
              <CCol lg="7"> <CInput type="text" value={ phone } onChange={ phoneChange } /> </CCol>
              <CCol lg="1"></CCol>
            </CRow>
            <br /><br />
            <CRow>
              <CCol lg="1"></CCol>
              <CCol lg="3"><CLabel className="mt-2"> Japanese skill </CLabel></CCol>
              <CCol lg="7">
                <CSelect value={ selectedJskill } onChange={ japanChange }>
                  <option> -- Select -- </option>
                  {
                    japaneseSkill.map( (data,index) => {
                      return (
                        <option key={ data.id } value={ data.level } > { data.level } </option>
                      )
                    })
                  }
                </CSelect>
              </CCol>
              <CCol lg="1"></CCol>
            </CRow>
            <br />
            <CRow>
              <CCol lg="1"></CCol>
              <CCol lg="3"></CCol>
              <CCol lg="7">
                {/* <button type="submit" className="btn btn-primary"> Save </button> */}
              </CCol>
            </CRow>
          </CCol>

          <CCol lg="6">
            <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3"><CLabel className="mt-1"> Email </CLabel></CCol>
                <CCol lg="7"> <CInput type="email" value={ email } onChange={ emailChange } /> </CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br /><br />
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3"><CLabel className="mt-1"> Birthday </CLabel></CCol>
                <CCol lg="7"> <CInput type="date" value={ birthday } onChange={ birthdayChange } /> </CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br /><br />
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="3"><CLabel className="mt-2"> English skill </CLabel></CCol>
                <CCol lg="7">
                  <CSelect value={ selectedEskill } onChange={ engChange } >
                    <option> -- Select -- </option>
                    {
                      englishSkill.map( (data,index) => {
                        return (
                          <option key={ data.id } value={ data.level } > { data.level } </option>
                        )
                      })
                    }
                  </CSelect>
                </CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br />
              <CRow>
              <CCol lg="1"></CCol>
              <CCol lg="3"></CCol>
              <CCol lg="7">
                {/* <button type="reset" className="btn btn-warning" onClick={ Reset }> Reset </button> */}
              </CCol>
            </CRow>


          </CCol>
        </CRow>
          <center>
            <CButton className="btn btn-outline-success" onClick={ sendClick }>Send</CButton> &emsp;
            <CButton className="btn btn-outline-danger" onClick={ resetClick }>Reset</CButton>
          </center>

      </>
    )
}

export default NewMenu;
