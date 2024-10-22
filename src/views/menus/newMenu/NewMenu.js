import { CButton, CCol, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React, { useState, useEffect } from "react";
import PopUp from "./PopUp";
import SuccessError from "../../common/SuccessError"; 
import { nullChk, validateName, validateEmail } from "../../common/CommonValidation";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const NewMenu=()=>{

  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ birthday, setBirthday ] = useState("");
  const [ selectedJskill, setSelectedJskill ] = useState("");
  const [ selectedEskill, setSelectedEskill ] = useState("");
  const [popUpShow,setPopUpShow] = useState(false);
  const [ success, setSuccess ] = useState([]);
  const [ error, setError ] = useState([]);
  let history = useHistory();

  useEffect( () => {
    // preventing accessing without login == true
    let flag = localStorage.getItem('LOGIN');
    if (flag == "true") {
        console.log("Login process success");
    }else {
        history.push('/loginReact');
    }
}, []);



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

  const popUpClick= ()=>{

    let errorMsg = [];

    // if (!nullChk(name)) {
    //   errorMsg.push("please fill name");
    // }else if (!validateName(name)) {
    //   errorMsg.push("pls fill character only in name");
    // }

    // if (!nullChk(phone)){
    // errorMsg.push("please fill phone");
    // }
    // if (!nullChk(email)){
    // errorMsg.push("please fill email");
    // }else if (!validateEmail(email)) {
    //   errorMsg.push("pls fill email format.")
    // }

    // if (!nullChk(birthday)){
    // errorMsg.push("please fill birthday");
    // }
    // if (!nullChk(selectedJskill)){
    // errorMsg.push("please fill japaneseSkill");
    // }
    // if (!nullChk(selectedEskill)){
    // errorMsg.push("please fill englishSkill");
    // }

    // if (errorMsg.length > 0) {
    //   setError(errorMsg);
    // }else {
    //   setError([]);
    //   setPopUpShow(true);

    // }
    setPopUpShow(true);

  }

  const successClick = () => {
    setSuccess (["successfully clicked name", " try click for phone"]);
  } 
  const errorClick = () => {
    setError (["errorfully clicked phone", " try click for name"]);
  } 

    return(
      <>
        <h1 className="mt-3" align="center">Register Form</h1>
        <br /><br />
        <SuccessError
          success = { success }
          error = { error }
        />
        <CRow>

          <CCol lg="6">
            <CRow>
              <CCol lg="1"></CCol>
              <CCol lg="3"><CLabel className="mt-1" onClick={ successClick }> Name </CLabel></CCol>
              <CCol lg="7"> <CInput type="text" value={ name } onChange={ nameChange } /> </CCol>
              <CCol lg="1"></CCol>
            </CRow>
            <br /><br />
            <CRow>
              <CCol lg="1"></CCol>
              <CCol lg="3"><CLabel className="mt-1" onClick={ errorClick }> Phone </CLabel></CCol>
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
            <CButton className="btn btn-outline-danger" onClick={ resetClick }>Reset</CButton> &emsp;
            <CButton className="btn btn-outline-danger"
            onClick={popUpClick}
            >PopUp</CButton> &emsp;
          </center>

          <PopUp 
              popUpShow={popUpShow}
              closeClick={() => setPopUpShow(false)} 
              // name = {"name"}
              // email = {"email"}
              // phone = {"phone"}
              // birthday = {"birthday"}
              // jskill = {"selectedJskill"}
              // eskill = {"selectedEskill"}
              name = {name}
              email = {email}
              phone = {phone}
              birthday = {birthday}
              jskill = {selectedJskill}
              eskill = {selectedEskill}
            />


      </>
    )
}

export default NewMenu;
