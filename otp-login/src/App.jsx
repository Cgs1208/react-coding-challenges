import { useState } from "react";
import PhoneOtpForm from "./components/PhoneLogin";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Phone OTP login</h1>
      <PhoneOtpForm />
    </div>
  );
}

export default App;
