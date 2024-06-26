import React, { useState } from "react";
import Welcome from "./Welcome";
import { CButton, CLabel, CTooltip } from "@coreui/react";
const TestCode=()=>{
    const str = localStorage.getItem("NAME");
    const truncatedStr = str ? str.substring(0, 15) : '';
  
    const [name,setName] = useState(localStorage.getItem("NAME"));
    const [phone,setPhone] = useState(localStorage.getItem("PHONE"));
    const [email,setEmail] = useState(localStorage.getItem("EMAIL"));
    const [birthday,setBirthday] = useState(localStorage.getItem("BIRTHDAY"));
    const [jskill,setEnglishSkill] = useState(localStorage.getItem("JSKILL"));
    const [eskill,setJapaneseSkill] = useState(localStorage.getItem("ESKILL"));

    const clearAll = () => {
        localStorage.clear();
        setName(null);
        setPhone(null);
        setEmail(null);
        setBirthday(null);
        setJapaneseSkill(null);
        setEnglishSkill(null);
    }

    return(
        <>
            <Welcome name="Sara"/>
            <Welcome name="Nice"/>
            <Welcome name="Elite"/>
            <br /><br />

            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <div className="card-body">
                            <CTooltip content={str} placement="right">
                                <span>{truncatedStr}...</span>
                            </CTooltip>
                            <br /><br />

                            { name ? (
                                <>
                                    <CLabel>{ name.substring(0, 15) }</CLabel>
                                    <CTooltip content={name} placement="bottom">
                                        <span>***</span>
                                    </CTooltip>
                                </>
                            ) 
                            : (
                                <CLabel>No Name</CLabel>
                            )}
                            <br /><br />

                            {/* <p>{localStorage.getItem("NAME")}</p>                         */}
                            <CLabel>{phone}</CLabel><br />
                            <CLabel>{email}</CLabel><br />
                            <CLabel>{birthday}</CLabel><br />
                            <CLabel>{jskill}</CLabel><br />
                            <CLabel>{eskill}</CLabel><br />
                        </div>
                    </div>
                </div>
            </div>

            <center>
                <CButton className="btn btn-danger" onClick={ clearAll }>
                  Delete localStorage        { /* homework */ }
                </CButton>
            </center>
        
        </>
    )
}

export default TestCode;