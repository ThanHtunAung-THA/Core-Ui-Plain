import { CInput } from "@coreui/react";
import React from "react";

const HomePrime = (props) => {

  let {name, age, saveClick, username, usernameChange, phone, phoneChange } = props;

  return (
    <>
      <h1>Home Prime page</h1><br />

      <p>welcome, {name} </p><br />

      <p>age is , {age} </p><br />

      <button className="btn btn-success"
      onClick={saveClick}

      >
        Save
      </button><br /><br />

      <CInput
      type="text"
      placeholder="Please fill name"
      value={ username }
      onChange={ usernameChange }

      />
      <p>your name is {username}</p>

      <CInput
      type="text"
      placeholder="Please fill phone no."
      value={ phone }
      onChange={ phoneChange }

      />
      <p>your phone is {phone}</p>


    </>
  )
}

export default HomePrime;
