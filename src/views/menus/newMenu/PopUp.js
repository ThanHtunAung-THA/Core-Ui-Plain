import { CCol, CModal, CModalBody, CModalHeader, CRow } from "@coreui/react";
import React from "react";

const PopUp = (props) => {
    let {popUpShow,closeClick,name,email,phone,birthday,jskill,eskill} = props;

    return (
       <>
       <CModal
           size="lg"
           centered
           closeOnBackdrop={true}
           show={popUpShow}
           onClose={closeClick}
       >
         <CModalHeader>
            <CRow >
            <span onClick={closeClick}
            style={{fontSize : "20px"}}
            >input-data-Popup</span>  
            </CRow>
        </CModalHeader> 
            <center><h2>Detail Infomation</h2></center>

            <CRow className = 'mt-3 ml-3'>
                <CCol lg='4'>
                    <h4>Name : </h4>
                </CCol>
                <CCol lg='4'>
                    <h4>{name}</h4>
                </CCol>
            </CRow>
            <CRow className = 'mt-3 ml-3'>
                <CCol lg='4'>
                    <h4>Email : </h4>
                </CCol>
                <CCol lg='4'>
                    <h4>{email}</h4>
                </CCol>
            </CRow>

            <CRow className = 'mt-3 ml-3'>
                <CCol lg='4'>
                    <h4>Phone : </h4>
                </CCol>
                <CCol lg='4'>
                    <h4>{phone}</h4>
                </CCol>
            </CRow>
            <CRow className = 'mt-3 ml-3'>
                <CCol lg='4'>
                    <h4>Birthday : </h4>
                </CCol>
                <CCol lg='4'>
                    <h4>{birthday}</h4>
                </CCol>
            </CRow>

            <CRow className = 'mt-3 ml-3'>
                <CCol lg='4'>
                    <h4>Japanese skill : </h4>
                </CCol>
                <CCol lg='4'>
                    <h4>{jskill}</h4>
                </CCol>
            </CRow>
            <CRow className = 'mt-3 ml-3'>
                <CCol lg='4'>
                    <h4>English Skill : </h4>
                </CCol>
                <CCol lg='4'>
                    <h4>{eskill}</h4>
                </CCol>
            </CRow>
       </CModal>
       
       </>
    )
}

export default PopUp;