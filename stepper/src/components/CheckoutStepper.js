import React from "react";
import { useState } from "react";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === currentStep.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  if (!stepsConfig.length) return <></>;

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              }
              ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
      </div>

      <ActiveComponent />

      {!isComplete && (
        <button
          disabled={currentStep === stepsConfig.length ? true : false}
          className="btn"
          onClick={handleNext}
        >
          {currentStep === stepsConfig.length ? "Finished" : "Next"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
