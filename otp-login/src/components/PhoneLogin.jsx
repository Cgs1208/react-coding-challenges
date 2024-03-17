import React, { useState } from "react";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    //phone number validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 0 || regex.test(phoneNumber)) {
      alert("wrong phone number");
      return;
    }

    setShowOtpInput(true);
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input type="text" onChange={handlePhoneNumber} value={phoneNumber} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter the otp sent to {phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
