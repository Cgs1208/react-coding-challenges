import { useState } from "react";

const usePassGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charSet = "",
      generatedPassword = "";

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOption.length === 0) {
      setPassword("");
      setError("Please select any option");
      return;
    }

    selectedOption.forEach((checkbox) => {
      switch (checkbox.title) {
        case "Include uppercase":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include lowercase":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include numbers":
          charSet += "0123456789";
          break;
        case "Include symbols":
          charSet += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[index];
    }

    setPassword(generatedPassword);
    setError("");
  };

  return { password, error, generatePassword };
};

export default usePassGenerator;
