import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill("")); //+length + to convert "4" to 4

  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) inputRef.current[0].focus();
  }, []);

  const handleChange = (event, index) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    //allow one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);
  };

  const handleClick = () => {
    // You should implement this function if necessary
  };

  const handleKeyDown = () => {
    // You should implement this function if necessary
  };

  return (
    <div>
      {otp.map((value, index) => (
        <input
          key={index}
          value={value}
          type="text"
          ref={(input) => (inputRef.current[index] = input)}
          onChange={(e) => handleChange(e, index)}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="otpInput"
        />
      ))}
    </div>
  );
};

export default OtpInput;
