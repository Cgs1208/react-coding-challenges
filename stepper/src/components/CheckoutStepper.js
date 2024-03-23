import React from "react";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  return (
    <div className="stepper">
      {stepsConfig.map((step, index) => {
        return (
          <div key={step.name}>
            <div>{index + 1}</div>
            <div className="step-name">{step.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutStepper;
