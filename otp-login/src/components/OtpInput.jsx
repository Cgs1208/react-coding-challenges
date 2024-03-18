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

    //move to next input field if current field is filled
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleClick = () => {};

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
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
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="otpInput"
        />
      ))}
    </div>
  );
};

export default OtpInput;
