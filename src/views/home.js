import React, { useState, useEffect } from "react";
import HomePrime from "./homePrime";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {

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
