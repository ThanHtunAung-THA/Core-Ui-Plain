import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LogoutReact = () => {
  let history = useHistory();

  useEffect(() => {
    // Clear the LOGIN key from local storage
    localStorage.removeItem("LOGIN");
    
    // Redirect to the login page
    history.push('/loginReact');
  }, [history]);

  return null; // This component does not render anything
};

export default LogoutReact;
