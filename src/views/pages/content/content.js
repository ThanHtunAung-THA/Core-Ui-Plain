import React, { useState, useEffect } from "react";
import Content2 from "./content2";
import Content3 from "./content3";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Content = () => {

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


  return (
    <>
      <h1>this is content page.</h1>
      <Content2 />
      <Content3 />

    </>
  )
}

export default Content;
