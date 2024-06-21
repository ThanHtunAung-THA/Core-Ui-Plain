import React, { useState } from "react";
import HomePrime from "./homePrime";

const Home = () => {

  // variables
  const [ username, setUsername ] = useState("");
  const [ phone, setPhone ] = useState("");

//functions
  const saveClick = () =>{
    alert("save clicked");
  }
  const usernameChange = (e) =>{
    setUsername(e.target.value);
  }
  const phoneChange = (e) =>{
    setPhone(e.target.value);
  }


  return (
    <>
      <h1>Hello world</h1> 
      <HomePrime
      name="mgmg"
      age="16"
      
      save={saveClick}

      username = {username}
      usernameChange = {usernameChange}

      phone = {phone}
      phoneChange = {phoneChange}
      />

    </>
  )
}

export default Home;
