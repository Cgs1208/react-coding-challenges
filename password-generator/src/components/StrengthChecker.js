import React from "react";

const StrengthChecker = ({ password }) => {
  const passwordStrengthChecker = (password) => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "very weak";
    } else if (passwordLength < 6) {
      return "weak";
    } else if (passwordLength < 8) {
      return "medium";
    } else if (passwordLength < 12) {
      return "strong";
    } else if (passwordLength < 15) {
      return "very strong";
    } else if (passwordLength < 21) {
      return "great";
    }
  };

  const strength = passwordStrengthChecker(password);

  if (!strength) return null;

  return (
    <div className="flex justify-between p-2 text-lg">
      <span>Strength : </span>
      <span>{strength}</span>
    </div>
  );
};

export default StrengthChecker;
