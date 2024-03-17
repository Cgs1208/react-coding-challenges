import React, { useState } from "react";

const OtpInput = ({ length, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (event, index) => {
    // You should implement this function to handle input change
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
