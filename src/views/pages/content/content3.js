import React from "react";

const Content3 = () => {

  const showClick = () => { alert ("you clicked my Show Button...") }

  return (
    <>
      <div>this is from content3. button testing is as follows.</div><br />
      <button 
      className="btn btn-outline-primary"
      onClick={ showClick }
      >
        Show
      </button>
    </>
  )
}

export default Content3;
