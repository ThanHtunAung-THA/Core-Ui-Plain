import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from "../../common/Loading";
import "../../../css/otp.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const OTPInput = () => {
  const inputRefs = useRef([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const inputs = inputRefs.current;

    const handleKeyDown = (event, index) => {
      setError(false); // Reset error on new input
      if (event.key === "Backspace") {
        inputs[index].value = '';
        if (index !== 0) {
          inputs[index - 1].focus();
        }
      } else {
        if (index === inputs.length - 1 && inputs[index].value !== '') {
          return true;
        } else if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[index].value = event.key;
          if (index !== inputs.length - 1) {
            inputs[index + 1].focus();
            event.preventDefault();
          }
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          inputs[index].value = String.fromCharCode(event.keyCode);
          if (index !== inputs.length - 1) {
            inputs[index + 1].focus();
            event.preventDefault();
          }
        }
      }

      // Check if all inputs have the correct code
      const otpCode = inputs.map(input => input.value).join('');
      if (otpCode.length === 4) {
        if (otpCode === '9999') {
          setLoading(true);
          setTimeout(() => {
            history.push('/home');
          }, 2000); // Simulate loading delay before navigating
        } else {
          setError(true);
        }
      }
    };

    inputs.forEach((input, index) => {
      input.addEventListener('keydown', (event) => handleKeyDown(event, index));
    });

    return () => {
      inputs.forEach((input, index) => {
        input.removeEventListener('keydown', (event) => handleKeyDown(event, index));
      });
    };
  }, [history]);

  return (
    <div className="container height-100 d-flex justify-content-center align-items-center">
      {loading && <Loading start={true} />}
      <div className="position-relative">
        <div className="card p-2 text-center">
          <h6>Please enter the one time password <br /> to verify your account</h6>
          <div> <span>A code has been sent to</span> <small>*******9897</small> </div>
          <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2"> 
            <input className="m-2 text-center form-control rounded" type="text" id="first" maxLength="1" ref={(el) => (inputRefs.current[0] = el)} /> 
            <input className="m-2 text-center form-control rounded" type="text" id="second" maxLength="1" ref={(el) => (inputRefs.current[1] = el)} /> 
            <input className="m-2 text-center form-control rounded" type="text" id="third" maxLength="1" ref={(el) => (inputRefs.current[2] = el)} /> 
            <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxLength="1" ref={(el) => (inputRefs.current[3] = el)} /> 
          </div>
          {error && <div className="text-danger mt-2">Wrong OTP code. Please try again.</div>}
        </div>
      </div>
    </div>
  );
};

export default OTPInput;
